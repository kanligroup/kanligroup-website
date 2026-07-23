import type { Locale } from './utils';

/**
 * 全站 UI 文案字典（导航、页脚、各页标题/引导语/按钮等「外壳」文字）。
 * 长内容（成员简介、新闻、方向描述等）放在 content.ts，按 slug 覆盖。
 */
type Dict = Record<string, any>;

const zh: Dict = {
  nav: {
    home: '首页',
    research: '研究方向',
    people: '团队成员',
    publications: '研究成果',
    news: '最新进展',
    media: '相关报道',
    admissions: '招生招聘',
    about: '关于',
  },
  footer: {
    tagline: '分布式微飞行器感知节点为 Physical AI 提供数据支撑',
    copy: '华中科技大学机械科学与工程学院',
  },
  common: {
    joint: '联合培养',
    nowAt: '毕业去向：',
    focus: '负责：',
    cover: '封面',
    link: '链接',
    allLink: '查看全部 →',
    videoFallback: '您的浏览器不支持视频播放。',
  },
  home: {
    eyebrow: '华中科技大学 · 智能制造装备与技术全国重点实验室',
    lede: '以理论与应用力学为统摄，发展柔性载体上的分布式感知——聚焦柔性电子微飞行器、耐高温柔性多模态传感器与柔性智能微系统，为 Physical AI 提供感知基础设施与数据支撑。',
    heroTitleCn: '· 厉侃课题组',
    heroCta1: '查看研究方向 →',
    heroCta2: '关于课题组',
    dirKicker: 'Research Directions',
    dirTitle: '研究方向',
    dirIntro: '以理论与应用力学为统摄，面向 Physical AI 的柔性载体分布式感知——三个相互支撑的研究方向。',
    teamLine: (n: number, p: number, m: number) =>
      `课题组由厉侃教授领衔，现有 ${n} 名研究生（${p} 名博士生 + ${m} 名硕士生）。`,
    teamLink: '查看团队 →',
    archLink: '查看完整研究方向架构 →',
    pubKicker: 'Selected Publications',
    pubTitle: '近期成果',
    pubIntro: '近几年有代表性的工作（按发表年份倒序）。',
    pubLink: '全部研究成果 →',
    newsKicker: 'News & Updates',
    newsTitle: '最新进展',
    newsIntro: '课题组前沿要闻与研究动态。',
    newsLink: '查看全部进展 →',
    mediaKicker: 'In the Media',
    mediaTitle: '相关报道',
    mediaIntro: '主流媒体对厉侃教授及课题组研究的报道。',
    mediaLink: '查看全部报道 →',
  },
  research: {
    kicker: 'Core Questions',
    title: '核心科学问题',
    lead: '当载体柔软、曲面、甚至在空中翻飞时——<br />如何让它依然"感知"世界，并与同伴协同？',
    framing:
      '柔性电子的本质，是一个力学问题：它的电学功能，取决于结构在力、热、电多场耦合下的形变与精确调控。我们围绕<strong>"柔性载体上的分布式感知"</strong>这一核心，发展三类相互支撑的能力，共同构成面向 Physical AI 的感知基础设施——',
    archKicker: 'Architecture',
    archTitle: '研究方向架构',
    archCaption:
      '图　以理论与应用力学为统摄的研究方向架构：三个相互支撑的能力方向，及其面向 Physical AI 的典型应用场景。',
  },
  about: {
    kicker: 'About',
    title: '关于课题组',
    pi: '厉侃（Kan Li）教授 · 课题组负责人',
    p1: '厉侃（Kan Li）课题组依托华中科技大学机械科学与工程学院与智能制造装备与技术全国重点实验室，以<strong>理论与应用力学</strong>为统摄，围绕<strong>柔性载体上的分布式感知</strong>这一核心科学问题，发展柔性电子分布式感知技术，并以<strong>微飞行器作为分布式空间感知节点</strong>，在仿生微飞行器、曲面共形高温传感、裂纹调控传感器、柔性智能微系统等领域取得系列突破。',
    metricsKicker: 'Scholar Metrics',
    metricsTitle: '学术指标（Google Scholar，实时数据）',
    metricsNote: '数据更新于',
    statCitations: '总被引次数',
    statH: 'h-index',
    statI10: 'i10-index',
    metricsNoteLive: '构建时自 Google Scholar 实时抓取',
    metricsNoteCache: '实时抓取失败，显示最近一次缓存',
    metricsView: '查看实时主页 ↗',
    metricsLine: (since: string) =>
      `近 5 年被引（自 2021）：<strong>${since}</strong> 次 · 论文总数 40+ 篇 · 代表作：<em>Nature</em>（封面）、PNAS、<em>Nature Communications</em>、<em>Science Advances</em>、<em>Advanced Materials</em> 等`,
    honorsTitle: '荣誉获奖',
    mentorsTitle: '合作导师',
    contactTitle: '联系：',
    groupPhotoCap: '课题组合影（2026 年，华中科技大学）· 注：吕莹、张浩未参加本次合影',
    roster: '前排（左→右）：朱彦臣、谢宏伟、韩炎岐、袁理、厉侃、何定峰、吴萱雨、曾翀、耿秀侠　后排（左→右）：刘奕辰、廖酩苍、许子健、侯超、令景辉、潘津羽、肖龙海',
  },
  people: {
    pi: '课题组负责人',
    phd: (n: number) => `在读博士生（${n}）`,
    master: (n: number) => `在读硕士生（${n}）`,
    alumni: (n: number) => `已毕业学生（${n}）`,
    bottom: (s: number, p: number, m: number, a: number) =>
      `课题组由厉侃教授领衔，现有 ${s} 名在读研究生（${p} 名博士生 + ${m} 名硕士生），另有 ${a} 名已毕业学生。`,
  },
  publications: {
    title: '研究成果',
    featured: '代表性论文',
    all: '全部论文（按年份）',
  },
  news: {
    title: '最新进展',
    intro: '课题组前沿要闻与研究动态。',
  },
  admissions: {
    kicker: 'Join Us',
    title: '招生招聘',
    intro: '课题组常年招收对以下方向感兴趣的优秀学生：',
    reqTitle: '招生要求：',
    req: '985 / 211 院校背景优先；具备材料、机械、电子、计算机或相关交叉背景。',
    contactTitle: '联系方式：',
    postKicker: 'Postdoctoral',
    postTitle: '博士后招聘',
    postIntro:
      '厉侃（Kan Li）课题组依托华中科技大学机械科学与工程学院与智能制造装备与技术全国重点实验室，现面向国内外公开招聘博士后研究人员若干名。',
    postDir: '研究方向：',
    postCond: '应聘条件：',
    postCond1: '已获得或即将获得机械、材料、力学、电子、生物医学工程或相关交叉学科博士学位；',
    postCond2: '在相关领域以第一作者发表过高水平学术论文，具备独立科研能力；',
    postCond3: '具备良好的英文写作与学术交流能力，有团队合作精神。',
    postBenefit:
      '待遇与支持：提供具有竞争力的薪酬与科研条件，按华中科技大学博士后相关规定执行；支持申报博士后创新人才支持计划、国家自然科学基金及各类博士后基金；优秀者推荐申请教职或海外交流。',
    postApply: '申请方式：',
    postApplyDetail: '请将个人简历、代表论文及研究计划发送至',
    postApplyNote: '，邮件标题请注明「博士后申请-姓名」。',
  },
  media: {
    title: '相关报道',
    intro: '主流媒体对厉侃教授及课题组研究的报道（按类别整理）。',
    catInterview: '人物专访',
    catReturnee: '归国故事',
    catResearch: '科研报道',
    catDesc: {
      interview: '媒体对厉侃的人物深度访谈与成长故事。',
      returnee: '归国任教，以及家乡、校友视角的报道。',
      research: '对代表性研究成果的报道与解读。',
    },
  },
  tree: {
    rootTitle: '核心科学问题',
    rootSub: '以理论与应用力学为统摄 · 柔性载体上的分布式感知',
    team: '团队成员',
    pubs: '发表论文',
    scenario: '应用场景',
  },
  honors: [
    '2021 — 国家自然科学基金优秀青年科学基金（海外）',
    '2021 — 东湖青年学者',
    '2017 — 国家优秀自费留学生奖学金',
    '2009 — 全国中学生物理竞赛（CPhO）金牌',
  ],
  mentors: [
    { name: '黄永刚 院士', desc: '西北大学 / 清华大学（博士导师）' },
    { name: 'John A. Rogers 院士', desc: '西北大学（合作导师）' },
    { name: 'Norman A. Fleck 院士', desc: '剑桥大学（博士后导师）' },
  ],
  contact: '办公地点：先进制造大楼东楼 D301 · 地址：湖北省武汉市洪山区珞喻路 1037 号',
};

const en: Dict = {
  nav: {
    home: 'Home',
    research: 'Research',
    people: 'Team',
    publications: 'Publications',
    news: 'News',
    media: 'Media',
    admissions: 'Admissions',
    about: 'About',
  },
  footer: {
    tagline: 'Distributed microflier sensing nodes powering Physical AI',
    copy: 'School of Mechanical Science and Engineering, HUST',
  },
  common: {
    joint: 'Joint Training',
    nowAt: 'Now at: ',
    focus: 'Focus: ',
    cover: 'Cover',
    link: 'Link',
    allLink: 'View all →',
    videoFallback: 'Your browser does not support video playback.',
  },
  home: {
    eyebrow:
      'Huazhong University of Science and Technology · State Key Laboratory of Intelligent Manufacturing Equipment and Technology',
    lede: 'Grounded in theoretical and applied mechanics, we develop distributed sensing on flexible substrates. We focus on flexible electronic microfliers, high-temperature flexible multimodal sensors, and flexible intelligent microsystems, and provide the sensing infrastructure and data foundation for Physical AI.',
    heroTitleCn: '· Kan Li Lab',
    heroCta1: 'Research Directions →',
    heroCta2: 'About the Lab',
    dirKicker: 'Research Directions',
    dirTitle: 'Research Directions',
    dirIntro:
      'Grounded in theoretical and applied mechanics, we build distributed sensing on flexible substrates for Physical AI, across three mutually reinforcing directions.',
    teamLine: (n: number, p: number, m: number) =>
      `Led by Prof. Kan Li, the group currently has ${n} graduate students (${p} Ph.D. + ${m} Master students).`,
    teamLink: 'Meet the Team →',
    archLink: 'Full research architecture →',
    pubKicker: 'Selected Publications',
    pubTitle: 'Selected Publications',
    pubIntro: 'Representative works from recent years (sorted by publication year, descending).',
    pubLink: 'All Publications →',
    newsKicker: 'News & Updates',
    newsTitle: 'News & Updates',
    newsIntro: 'Frontline highlights and research updates from the group.',
    newsLink: 'All Updates →',
    mediaKicker: 'In the Media',
    mediaTitle: 'In the Media',
    mediaIntro: 'Media coverage of Prof. Kan Li and the group’s research.',
    mediaLink: 'All Media →',
  },
  research: {
    kicker: 'Core Questions',
    title: 'Core Scientific Questions',
    lead:
      'When the substrate is soft, curved, or tumbling through the air,<br />how do we let it still “sense” the world and coordinate with its peers?',
    framing:
      'Flexible electronics is, at its heart, a mechanics problem: its electrical function depends on how the structure deforms and is precisely controlled under coupled mechanical, thermal, and electrical fields. Around the core question of <strong>“distributed sensing on flexible substrates,”</strong> we develop three mutually reinforcing capabilities that together form the sensing infrastructure for Physical AI.',
    archKicker: 'Architecture',
    archTitle: 'Research Architecture',
    archCaption:
      'Fig.　Research architecture grounded in theoretical and applied mechanics: three mutually reinforcing capability directions and their representative application scenarios for Physical AI.',
  },
  about: {
    kicker: 'About',
    title: 'About the Lab',
    pi: 'Prof. Kan Li · Principal Investigator',
    p1: 'The Kan Li Group is based at the School of Mechanical Science and Engineering, HUST, and the State Key Laboratory of Intelligent Manufacturing Equipment and Technology. Grounded in <strong>theoretical and applied mechanics</strong> and organized around the core question of <strong>distributed sensing on flexible substrates</strong>, we develop flexible electronic distributed-sensing technologies. We use <strong>microfliers as distributed spatial sensing nodes</strong>, and have achieved breakthroughs in bio-inspired microfliers, conformal high-temperature curved-surface sensing, crack-controlled sensors, and flexible intelligent microsystems.',
    metricsKicker: 'Scholar Metrics',
    metricsTitle: 'Scholar Metrics (Google Scholar, live data)',
    metricsNote: 'Data updated',
    statCitations: 'Total Citations',
    statH: 'h-index',
    statI10: 'i10-index',
    metricsNoteLive: 'fetched live from Google Scholar at build time',
    metricsNoteCache: 'live fetch failed; showing last cached snapshot',
    metricsView: 'View live profile ↗',
    metricsLine: (since: string) =>
      `Citations in the last 5 years (since 2021): <strong>${since}</strong> · 40+ papers · Representative works: <em>Nature</em> (cover), PNAS, <em>Nature Communications</em>, <em>Science Advances</em>, <em>Advanced Materials</em>, etc.`,
    honorsTitle: 'Honors & Awards',
    mentorsTitle: 'Mentors',
    contactTitle: 'Contact: ',
    groupPhotoCap:
      'Group photo (2026, HUST) · Note: Ying Lü and Hao Zhang were not present at this photo',
    roster:
      'Front row (L→R): Yanchen Zhu, Hongwei Xie, Yanqi Han, Li Yuan, Kan Li, Dingfeng He, Xuanyu Wu, Chong Zeng, Xiuxia Geng　Back row (L→R): Yichen Liu, Mingcang Liao, Zijian Xu, Chao Hou, Jinghui Ling, Jinyu Pan, Longhai Xiao',
  },
  people: {
    pi: 'Principal Investigator',
    phd: (n: number) => `Ph.D. Students (${n})`,
    master: (n: number) => `Master Students (${n})`,
    alumni: (n: number) => `Alumni (${n})`,
    bottom: (s: number, p: number, m: number, a: number) =>
      `Led by Prof. Kan Li, the group currently has ${s} graduate students (${p} Ph.D. + ${m} Master students), plus ${a} alumni.`,
  },
  publications: {
    title: 'Publications',
    featured: 'Selected Papers',
    all: 'All Papers (by year)',
  },
  news: {
    title: 'News & Updates',
    intro: 'Frontline highlights and research updates from the group.',
  },
  admissions: {
    kicker: 'Join Us',
    title: 'Admissions & Recruitment',
    intro: 'We recruit outstanding students interested in the following directions year-round:',
    reqTitle: 'Requirements: ',
    req: 'Priority to candidates from 985 / 211 universities; background in materials, mechanical, electronics, computer science, or related interdisciplinary fields.',
    contactTitle: 'Contact: ',
    postKicker: 'Postdoctoral',
    postTitle: 'Postdoctoral Positions',
    postIntro:
      'The Kan Li Group at HUST’s School of Mechanical Science and Engineering and the State Key Laboratory of Intelligent Manufacturing Equipment and Technology is recruiting multiple postdoctoral researchers from home and abroad.',
    postDir: 'Research directions: ',
    postCond: 'Qualifications: ',
    postCond1:
      'Ph.D. (awarded or imminent) in mechanical, materials, mechanics, electronics, biomedical engineering, or related interdisciplinary fields;',
    postCond2:
      'First-author publications in high-impact venues in the relevant field, with independent research ability;',
    postCond3: 'Strong English writing and academic communication skills; team spirit.',
    postBenefit:
      'Compensation & support: competitive salary and research conditions per HUST postdoctoral regulations; support for the Postdoctoral Innovative Talent Program, NSFC, and other postdoctoral funds; outstanding candidates recommended for faculty positions or overseas exchanges.',
    postApply: 'How to apply: ',
    postApplyDetail: 'Please send your CV, representative papers, and research plan to ',
    postApplyNote: ', with the email subject “Postdoc Application – Your Name”.',
  },
  media: {
    title: 'In the Media',
    intro: 'Media coverage of Prof. Kan Li and the group’s research (grouped by category).',
    catInterview: 'Interviews',
    catReturnee: 'Returnee Stories',
    catResearch: 'Research Coverage',
    catDesc: {
      interview: 'In-depth interviews and personal stories about Kan Li.',
      returnee: 'Reports on returning to teach in China, from hometown and alumni perspectives.',
      research: 'Coverage and interpretation of representative research results.',
    },
  },
  tree: {
    rootTitle: 'Core Scientific Questions',
    rootSub: 'Grounded in theoretical and applied mechanics · Distributed sensing on flexible substrates',
    team: 'Team',
    pubs: 'Publications',
    scenario: 'Applications',
  },
  honors: [
    '2021 — NSFC Excellent Young Scientists Fund (Overseas)',
    '2021 — Donghu Young Scholar',
    '2017 — Chinese Government Award for Outstanding Self-financed Students Abroad',
    '2009 — CPhO National Gold Medal (China Physics Olympiad)',
  ],
  mentors: [
    { name: 'Prof. Yonggang Huang (Academician)', desc: 'Northwestern Univ. / Tsinghua Univ. (Ph.D. advisor)' },
    { name: 'Prof. John A. Rogers (Academician)', desc: 'Northwestern Univ. (Co-advisor)' },
    { name: 'Prof. Norman A. Fleck (Academician)', desc: 'Univ. of Cambridge (Postdoc advisor)' },
  ],
  contact: 'Office: East Building D301, Advanced Manufacturing Building · Address: 1037 Luoyu Road, Hongshan Dist., Wuhan, Hubei',
};

const dict: Record<Locale, Dict> = { zh, en };

function getPath(obj: Dict, path: string): any {
  return path.split('.').reduce((o: any, k: string) => (o == null ? undefined : o[k]), obj);
}

export function useTranslations(locale: Locale) {
  return (path: string): any => {
    const v = getPath(dict[locale], path);
    if (v !== undefined) return v;
    return getPath(dict.zh, path) ?? path;
  };
}

export const ui = dict;
