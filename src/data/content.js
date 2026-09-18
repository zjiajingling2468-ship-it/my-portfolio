export const site = {
  resumeUrl: '/简历-郑佳.pdf',
}

export const navigation = [
  { id: 'top', label: '关于我' },
  { id: 'edu', label: '教育背景' },
  { id: 'work', label: '工作经历' },
  { id: 'proj', label: '项目展示' },
  { id: 'skills', label: '技能特长' },
  { id: 'life', label: '兴趣爱好' },
]

export const hero = {
  greeting: 'HELLO / 你好',
  name: '郑佳',
  role: '电商运营 / E-commerce Operations',
  motto: '用数据读懂用户，用细节做出增长。',
  intro:
    '深圳大学供应链管理（供应链金融）本科，先后在正浩 EcoFlow、安克创新、影石 Insta360 三家智能硬件出海企业实习，走完「用户洞察 → 项目管理 → 电商运营」的完整链路，擅长把调研数据变成可落地的增长动作。',
  tags: ['电商运营', '用户洞察', '竞品调研', '出海 & 跨境', 'AI 提效'],
  status: ['深圳大学 · 26 届毕业生', '可立即到岗'],
}

export const education = {
  eyebrow: '01 / EDUCATION',
  title: '我的学习轨迹',
  subtitle: '在鹏城读供应链，在实战里学运营。',
  school: {
    date: '2022.09 — 2026.06',
    degree: '本科 / 供应链管理（供应链金融）',
    name: '深圳大学',
    description: '主修供应链与金融交叉方向，数理与商业分析基础扎实。',
  },
  honors: ['🥉 “互联网+” 国赛铜奖', '⭐ 校级学习之星', '💡 双创之星', '🏅 优秀班干部', '📋 累计 20 余项校级以上荣誉'],
  courses: ['运筹学', '供应链金融实务与分析', '公司金融', '统计学'],
}

export const experience = {
  eyebrow: '02 / THE PRACTITIONER',
  title: '我在过往职场做过什么',
  subtitle: '三段智能硬件出海企业实习，从用户洞察到项目管理，再到电商运营。',
  items: [
    {
      company: '影石创新',
      englishName: 'INSTA360',
      role: '电商运营实习生',
      date: '2025.11 — 2026.04',
      bullets: [
        '从 0-1 参与搭建电商智能 AI 客服与智能质检体系，平台响应速度控制在 3 秒内，实现年度降本 10 万元以上',
        '基于各平台会话与进线咨询数据，拆解用户购买决策点与卡点，输出「顾虑—卖点—引导」FABE 转化框架',
        '搭建导购标准化能力体系并落地外包团队培训，支撑双旦大促期间 GMV 与转化率提升 15%',
      ],
    },
    {
      company: '安克创新',
      englishName: 'ANKER',
      role: '零售项目管理实习生',
      date: '2025.06 — 2025.10',
      bullets: [
        '深度参与 8 个新品项目落地，覆盖需求梳理、内容确认到区域释放的全流程',
        '对接 GTM 挖掘新品卖点与曝光点，撰写 POSM 物料需求，助力海外区域销售与渠道伙伴理解产品价值',
        '协调 PM、GTM、供应链与区域业务团队跟进交付节点，支持国际大型展会中的产品展示',
      ],
    },
    {
      company: '正浩创新',
      englishName: 'ECOFLOW',
      role: '用户市场洞察实习生',
      date: '2024.12 — 2025.04',
      bullets: [
        '系统分析欧洲、美国、非洲、日本等市场 C 端 / B 端用户深度访谈，累计沉淀 30 余份标准化用户研究文档',
        '搭建用户标签体系与精细化分层，构建全域用户购买旅程知识库，支撑用户运营策略与产品定位',
        '从产品矩阵、使用场景、市场体量、用户口碑、营销打法多维度竞品对标，输出竞品分析与商业化优化方案',
      ],
    },
  ],
}

export const projects = {
  eyebrow: '03 / PROJECTS',
  title: '我做过的项目',
  subtitle: '从校园品牌到乡村田野，再到 AI 提效实践。',
  items: [
    {
      meta: '品牌校园运营 · 2024.03 — 2024.11',
      title: '华为花粉俱乐部',
      role: '校园宣传负责人',
      bullets: [
        '负责深大华为花粉 500 人社群的运营策划与用户互动，持续拉新促活',
        '策划落地 4 场线上线下品牌活动，含全校千人「韵动会」',
        '独立运营俱乐部公众号与小红书账号，产出原创内容放大品牌校园声量',
      ],
      tags: ['社群运营', '活动策划', '新媒体'],
      imageClass: 'a',
      icon: '🎪',
      imageLabel: '品牌活动与校园运营',
    },
    {
      meta: '社会调研 + 助农直播 · 2024.01 — 2024.02',
      title: '清华大学乡村振兴工作站',
      role: '文旅产业调研员',
      bullets: [
        '深入 10 余个古村落实地调研十余天，完成 300 份问卷设计与 70 余户居民访谈',
        '协同完成增城文旅与产业发展调研报告，并向增城政府汇报资源整合与发展路径方案',
        '参与助农直播全流程，3 小时直播累计观看 800+ 人次，促成订单约 60 单',
      ],
      tags: ['实地调研', '直播电商', '助农'],
      imageClass: 'b',
      icon: '🌾',
      imageLabel: '乡村调研与助农直播',
    },
    {
      meta: 'AI 提效实践 · 2025.11 — 2026.04',
      title: '电商智能 AI 客服 0-1 搭建',
      role: '核心参与者 · 影石创新实习期间',
      bullets: [
        '从 0-1 参与智能客服与智能质检体系搭建，对接供应商完成服务配置',
        '输出机器人接线智能质检 SOP，将一线用户反馈回流至机器人配置与素材更新',
        '形成智能线上营销销售闭环：响应速度 3 秒内，年度降本 10 万元以上',
      ],
      tags: ['AI 应用', '流程自动化', '降本增效'],
      imageClass: 'c',
      icon: '🤖',
      imageLabel: '智能客服与质检系统',
    },
  ],
}

export const skills = {
  eyebrow: '04 / SKILLS',
  title: '技能图谱',
  subtitle: '从洞察研究到运营落地，数据工具兜底的复合能力。',
  groups: [
    { icon: '🚀', title: '核心运营能力', items: ['电商平台运营', '用户运营', '社群运营', '导购体系搭建', '直播电商'] },
    { icon: '🔍', title: '洞察与研究', items: ['用户调研与分层', '竞品对标分析', '渠道研究', 'GTM 支持', '活动策划'] },
    { icon: '📊', title: '数据与工具', items: ['SQL', 'SPSS', 'Python', 'Excel · VLOOKUP · 透视表', 'Figma', 'WPS'] },
    { icon: '💡', title: '软实力', items: ['跨职能协作', '项目管理', '汇报表达', '英语 CET-6'] },
  ],
}

export const life = {
  eyebrow: '05 / LIFE',
  title: '工作之外的我',
  subtitle: '保持好奇，热爱生活，用丰富的体验滋养创造力。',
  items: [
    { icon: '🏮', title: '古装剧', text: '在东方美学里汲取灵感' },
    { icon: '🎬', title: '电影', text: '在别人的故事里看见世界' },
    { icon: '📷', title: '摄影', text: '用镜头记录生活的细节与光影' },
    { icon: '✍️', title: '书法', text: '一笔一画，练的是耐心与审美' },
    { icon: '🎾', title: '网球', text: '在挥拍与跑动中释放压力' },
  ],
}

export const contact = {
  title: '让我们保持联系 👋',
  description: '对我的经历感兴趣，或想进一步交流？欢迎随时联系。',
  email: '13131442792@163.com',
  emailLabel: '📮 13131442792@163.com',
}
