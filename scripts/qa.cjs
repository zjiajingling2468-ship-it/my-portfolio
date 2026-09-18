const fs = require('node:fs')
const path = require('node:path')

const modulesRoot = process.env.PORTFOLIO_NODE_MODULES
const browserPath = process.env.PORTFOLIO_BROWSER_PATH

if (!modulesRoot || !browserPath) {
  throw new Error('PORTFOLIO_NODE_MODULES and PORTFOLIO_BROWSER_PATH are required')
}

const { chromium } = require(path.join(modulesRoot, 'playwright'))

async function inspectViewport(page, name, viewport) {
  await page.setViewportSize(viewport)
  const errors = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))

  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
  const sectionCount = await page.locator('main section').count()
  for (let index = 0; index < sectionCount; index += 1) {
    await page.locator('main section').nth(index).scrollIntoViewIfNeeded()
    await page.waitForTimeout(80)
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(150)

  const checks = await page.evaluate(() => ({
    title: document.title,
    heading: document.querySelector('h1')?.innerText,
    sections: [...document.querySelectorAll('main section')].map((section) => section.id),
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    unloadedImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).length,
  }))

  fs.mkdirSync('tmp/qa', { recursive: true })
  await page.screenshot({ path: `tmp/qa/${name}.png`, fullPage: true })
  return { name, viewport, errors, ...checks }
}

;(async () => {
  const browser = await chromium.launch({ executablePath: browserPath, headless: true })
  const page = await browser.newPage()
  const results = []
  results.push(await inspectViewport(page, 'desktop', { width: 1440, height: 1000 }))
  results.push(await inspectViewport(page, 'mobile-375', { width: 375, height: 812 }))

  const resumeResponse = await page.request.get('http://127.0.0.1:5173/简历-郑佳.pdf')
  const output = { results, resumeStatus: resumeResponse.status() }
  console.log(JSON.stringify(output, null, 2))

  await browser.close()

  const failed = results.some((result) =>
    result.errors.length || result.horizontalOverflow || result.unloadedImages || result.sections.length !== 6,
  ) || resumeResponse.status() !== 200
  process.exitCode = failed ? 1 : 0
})()
