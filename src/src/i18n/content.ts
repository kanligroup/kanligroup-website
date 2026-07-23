import type { Locale } from './utils';

/**
 * 长内容（成员、新闻、方向标题/描述等）的英文覆盖，按 slug/id 索引。
 * 与 ui.ts 的「外壳文案」分离，集中管理，避免改动 21 个成员 md 文件。
 */

// 研究方向标题（中 → 英），供首页卡片、研究页 q-card、架构图共用
export const dirEn: Record<string, string> = {
  '柔性电子微飞行器': 'Flexible Electronic Microfliers',
  '耐高温柔性多模态传感器': 'High-Temperature Flexible Multimodal Sensors',
  '柔性智能微系统': 'Flexible Intelligent Microsystems',
};

export const dirCaptionEn: Record<string, string> = {
  '柔性电子微飞行器':
    'Bio-inspired 3D microfliers that integrate sensing–communication–actuation to form distributed spatial sensing nodes (Nature 2021 cover).',
  '耐高温柔性多模态传感器':
    'Conformal multimodal flexible sensors on engine hot sections and complex curved surfaces for extreme-environment structural-health monitoring.',
  '柔性智能微系统':
    'Flexible intelligent microsystems fusing fiber electronics, soft actuation and neural interfaces for human–machine–environment synergy.',
};

export const dirLabelEn: Record<string, string> = {
  '柔性电子微飞行器': 'Flexible Electronic Microfliers',
  '耐高温柔性多模态传感器': 'High-Temperature Flexible Multimodal Sensors',
  '柔性智能微系统': 'Flexible Intelligent Microsystems',
};

// 研究页 q-card 副标题（kicker）
export const dirQKickerEn: Record<string, string> = {
  '柔性电子微飞行器': 'Distributed Spatial Sensing Nodes',
  '耐高温柔性多模态传感器': 'Extreme-Environment Structural Monitoring',
  '柔性智能微系统': 'Human–Machine–Environment Fusion Terminal',
};

// 成员英文信息（覆盖 name/role/degree/project/bio）
export type MemberEn = {
  name?: string;
  role?: string;
  degree?: string;
  project?: string;
  bio?: string;
};

export const memberEn: Record<string, MemberEn> = {
  'kan-li': { name: 'Kan Li', role: 'Professor / Ph.D. Advisor / PI' },
  'liu-yichen': { name: 'Yichen Liu', role: 'Ph.D. Student', degree: '2024', project: 'Active thermal-convection lift generation and control for flexible microfliers; bio-inspired microfliers for environmental monitoring', bio: 'Works on active thermal-convection lift generation and control for flexible microfliers and bio-inspired microfliers for environmental monitoring; contributes to mass-shifting microgliders with integrated sensing–communication–actuation (with H. Xie).' },
  'xie-hongwei': { name: 'Hongwei Xie', role: 'Ph.D. Student', degree: '2026', project: 'Flexible electronic microfliers (mass-shifting microgliders with sensing–communication–actuation); flight-stability mechanisms of microgliders; wireless networking for microfliers', bio: 'Leads mass-shifting microgliders, flight-stability mechanisms, and wireless networking; contributes to pressure-array sensing (Y. Lü), UAV propeller health monitoring (Y. Han), morphable microfliers (X. Geng), and bio-inspired microfliers (Y. Liu).' },
  'hou-chao': { name: 'Chao Hou', role: 'Ph.D. Student', degree: '2018', project: 'High-temperature flexible multimodal sensing (multi-parameter distributed sensing)', bio: 'Leads high-temperature flexible multimodal sensing (multi-parameter distributed sensing); contributes to pressure-array sensing (Y. Lü), distributed multifunctional sensor arrays for wind-tunnel applications (L. Yuan), and nanoscale-effect in-situ sensing (Z. Xu).' },
  'zhu-yanchen': { name: 'Yanchen Zhu', role: 'Ph.D. Student', degree: '2025', project: 'Flexible hybrid sensing arrays; radar wireless localization; modular flexible robotics', bio: 'Works on flexible hybrid sensing arrays, radar wireless localization and modular flexible robotics; contributes to LCE soft robots (Tsinghua), flexible intelligent microsystems (H. Zhang), mass-shifting microgliders (H. Xie), and morphable microfliers (X. Geng).' },
  'han-yanqi': { name: 'Yanqi Han', role: 'Ph.D. Student', degree: '2026', project: 'Flexible sensing-network design and fabrication; rotor data-acquisition systems; KNN machine-learning models; flexible microsystem electrodes', bio: 'Works on flexible sensing networks, rotor data-acquisition, KNN modeling and flexible microsystem electrodes; contributes to mass-shifting microgliders (H. Xie).' },
  'liao-mingcang': { name: 'Mingcang Liao', role: 'Master Student', degree: '2025', project: 'Ultra-miniature flexible electronic microfliers based on active thermal-convection control', bio: 'Works on ultra-miniature flexible electronic microfliers based on active thermal-convection control, studying lift-generation mechanisms and control (with Y. Liu).' },
  'xu-zijian': { name: 'Zijian Xu', role: 'Ph.D. Student', degree: '2022', project: 'High-temperature flexible sensors (nanoscale effects and in-situ sensing)', bio: 'Leads high-temperature flexible sensors (nanoscale effects and in-situ sensing) and flexible fiber electronics; contributes to multi-parameter distributed sensing (C. Hou), pressure-array sensing (Y. Lü), active thermal-convection lift control (Y. Liu), LCE elastomer fabrication (X. Geng), and TENG fibers (C. Zeng).' },
  'ling-jinghui': { name: 'Jinghui Ling', role: 'Ph.D. Student', degree: '2023', project: 'Flexible PZT thin-film delamination and piezoelectric sensor fabrication', bio: 'Works on flexible PZT thin-film delamination and piezoelectric sensor fabrication; contributes to micron-scale self-morphing microflier fabrication and laser-induced-graphene 3D self-assembled flyers (with K. Li).' },
  'pan-jinyu': { name: 'Jinyu Pan', role: 'Master Student', degree: '2025', project: 'Flexible multimodal sensor fabrication', bio: 'Works on flexible multimodal sensor fabrication; contributes to micron-scale self-morphing microflier fabrication (K. Li).' },
  'wu-xuanyu': { name: 'Xuanyu Wu', role: 'Ph.D. Student', degree: '2023', project: 'Gravity-assisted self-morphing microfliers; multiphysics simulation and analysis', bio: 'Works on gravity-assisted self-morphing microfliers and multiphysics simulation; contributes to periodic asymmetric fields for enhanced nanoliposome electrofusion (Zhejiang Univ.) and stretch–compression devices for composite-skin modulus monitoring (Zhejiang Univ.).' },
  'xiao-longhai': { name: 'Longhai Xiao', role: 'Master Student', degree: '2025', project: 'Multiphysics simulation and optimization design', bio: 'Works on multiphysics simulation and optimization; contributes to mass-shifting microgliders (H. Xie).' },
  'lv-ying': { name: 'Ying Lü', role: 'Master Student', degree: '2024', project: 'High-temperature flexible sensors (pressure-array sensing)', bio: 'Works on high-temperature flexible sensors (pressure-array sensing); contributes to mass-shifting microgliders (H. Xie), nanoscale-effect in-situ sensing (Z. Xu), and multi-parameter distributed sensing (C. Hou).' },
  'geng-xiuxia': { name: 'Xiuxia Geng', role: 'Ph.D. Student', degree: '2025', project: 'Morphable microfliers; thermo-responsive liquid-crystal elastomer fabrication', bio: 'Works on morphable microfliers and thermo-responsive liquid-crystal elastomer fabrication; contributes to mass-shifting microgliders (H. Xie).' },
  'zeng-chong': { name: 'Chong Zeng', role: 'Master Student', degree: '2025', project: 'Flexible intelligent microfliers based on triboelectric nanostructured films', bio: 'Works on flexible intelligent microfliers based on triboelectric nanostructured films; contributes to nanoscale-effect in-situ sensing (Z. Xu) and gravity-assisted self-morphing microfliers (X. Wu).' },
  'zhang-hao': { name: 'Hao Zhang', role: 'Master Student', degree: '2025', project: 'Flexible electronic brain–computer interfaces; invasive wireless distributed BCI', bio: 'Works on flexible electronic brain–computer interfaces and invasive wireless distributed BCI.' },
  'yuan-li': { name: 'Li Yuan', role: 'Master Student', degree: '2023', project: 'Distributed multifunctional sensor arrays and wind-tunnel applications', affiliation: 'Shokz', bio: 'Master student (2023), alumnus, now at Shokz.', alumniNote: true },
  'bai-yunzhao': { name: 'Yunzhao Bai', role: 'Ph.D. Student', degree: '2017', affiliation: 'BYD', bio: 'Ph.D. student (2017, joint training), alumnus, now at BYD.', alumniNote: true },
  'cheng-wenna': { name: 'Wenna Cheng', role: 'Master Student', degree: '2021', bio: 'Master student (2021, joint training), alumnus.', alumniNote: true },
  'he-dingfeng': { name: 'Dingfeng He', role: 'Master Student', degree: '2023', bio: 'Master student (2023), alumnus.', alumniNote: true },
  'he-qintao': { name: 'Qintao He', role: 'Master Student', degree: '2022', affiliation: 'BYD', bio: 'Master student (2022), alumnus, now at BYD.', alumniNote: true },
};

// 新闻英文覆盖（按 slug）
export const newsEn: Record<string, { title?: string; excerpt?: string }> = {
  '2026-afm-hightemp-sensor': { title: 'Advanced Fiber Materials: New progress in high-temperature flexible sensors', excerpt: 'The high-temperature sensor paper by Zijian Xu, Chao Hou et al. was accepted by Advanced Fiber Materials, reporting the group’s latest results in high-temperature flexible multimodal sensing.' },
  '2026-liuyichen-best-poster': { title: 'Yichen Liu wins Best Poster Award', excerpt: 'Yichen Liu received the Best Poster Award at a recent academic conference for his work on flexible microflier lift control.' },
  '2025-ceramic-fibers-review': { title: 'Review on flexible ceramic fibers published', excerpt: 'A review on flexible ceramic fibers and their applications was published, summarizing the group’s work in flexible fiber electronics.' },
  '2024-crack-strain-sensor': { title: 'Crack-engineered flexible strain sensor', excerpt: 'A crack-engineered flexible strain sensor was reported, advancing conformal strain sensing on curved surfaces.' },
  '2023-rise-hightemp': { title: 'Rise of flexible high-temperature electronics review in Rare Metals', excerpt: 'The review outlooks the material systems, packaging strategies, and extreme-environment applications of flexible high-temperature electronics, defining the group’s main line of high-temperature flexible sensing.' },
  '2024-marangoni-tactile': { title: 'Marangoni-driven tactile system in Nature Communications', excerpt: 'The Marangoni effect is used to achieve controlled formation of high-sensitivity tactile microstructures, enhancing flexible tactile sensing performance.' },
  '2025-mmcs-editorial-board': { title: 'Kan Li joins editorial board of Mathematics and Mechanics of Complex Systems (JCR Q1)', excerpt: 'Group PI Kan Li was invited to serve on the editorial board of Mathematics and Mechanics of Complex Systems (JCR Q1), contributing to the journal’s academic development.' },
  '2025-morphable-3d': { title: 'Shear-guided morphable 3D architectures in Materials Today', excerpt: 'A shear-guided 3D architecture formation strategy is proposed, expanding the application of flexible structures in reconfigurable devices.' },
  '2025-u40-project': { title: 'Kan Li awarded Ministry of Education U40 Project (5-year support, 15 M CNY)', excerpt: 'Group PI Kan Li was awarded the Ministry of Education U40 Project, with 5 years of continuous support totaling 15 million CNY, for sustained research on distributed sensing on flexible carriers.' },
  '2025-wing-tilt': { title: 'Microflier free-fall dynamics (wing-tilt effect) in MMCS', excerpt: 'Reveals how wing-tilt modulates the free-fall trajectory of 3D microfliers, providing a basis for passive distributed sensing node design.' },
  '2026-acta-rl-softrobot': { title: 'Acta Automatica Sinica: RL control for bioinspired robots with redundant artificial muscles', excerpt: 'The paper “Reinforcement Learning Control for Bioinspired Robots Driven by Redundant Artificial Muscles” was published in Acta Automatica Sinica, proposing an RL control method for bioinspired robots driven by redundant artificial muscles.' },
  '2026-discoversensors-hightemp': { title: 'Discover Sensors: Design approaches for high-temperature flexible pressure sensors', excerpt: 'The review “Design approaches for high-temperature-resistant flexible pressure sensors in extreme environments” was published in Discover Sensors, systematically summarizing design methods for extreme-environment high-temperature flexible pressure sensors.' },
  '2026-houchao-academic-league-first': { title: 'Chao Hou wins 1st place in School academic league', excerpt: 'Ph.D. student Chao Hou excelled in the School of Mechanical Science and Engineering academic league at Huazhong University of Science and Technology, winning first place.' },
  '2026-mechanics-of-materials-ae': { title: 'Kan Li appointed Associate Editor of Mechanics of Materials', excerpt: 'Group PI Kan Li was invited to serve as Associate Editor of Mechanics of Materials, a journal in solid mechanics, participating in manuscript review and journal development.' },
  '2026-natcomm-lagrangian': { title: 'Nature Communications: Distributed biodegradable Lagrangian sensors', excerpt: 'The paper “Distributed multitudes of bio-inspired, biodegradable Lagrangian sensors for environmental sustainability” was published in Nature Communications, proposing biodegradable distributed Lagrangian sensors for environmentally sustainable monitoring.' },
};

// 媒体类别英文
export const mediaCatEn: Record<string, string> = {
  '人物专访': 'Interviews',
  '归国故事': 'Returnee Stories',
  '科研报道': 'Research Coverage',
};

// 媒体条目英文（标题 / 摘要 / 来源）
export const mediaEn: Record<string, { title?: string; excerpt?: string; outlet?: string }> = {
  '2021-deeptech-interview': { outlet: 'DeepTech', title: 'Solving the post-packaging stretchability challenge of flexible circuits with 3D structures — this 28-year-old mechanics star is returning to HUST | Interview', excerpt: 'In-depth interview with Kan Li: breaking the “packaging paradox” of flexible electronics via 3D buckling structures, and sharing his plan to return to Huazhong University of Science and Technology.' },
  '2021-flexible-team-nature': { outlet: 'HUST School of Materials', title: 'Nature publishes new faculty member Kan Li’s “wind-dispersed-seed-inspired 3D microelectronic microflier”', excerpt: 'The HUST flexible-electronics fabrication team reports Kan Li’s Nature paper and introduces iFlexSense, a flexible intelligent-skin measurement technique developed with Prof. Yong’an Huang’s group.' },
  '2021-sciencenet-microflier': { outlet: 'ScienceNet', title: 'China–US–Korea team creates the smallest electronic flier ever', excerpt: 'Reports the Nature cover paper “wind-dispersed-seed-inspired 3D microelectronic microflier”; Kan Li is co-first author.' },
  '2021-scitechdaily-microflier': { outlet: 'SciTechDaily', title: 'Winged Microchip Is Smallest-Ever Human-Made Flying Structure', excerpt: 'International science outlet coverage of the Nature cover “wind-dispersed-seed 3D microelectronic microflier”; Kan Li is co-first author.' },
  '2021-thepaper-scientific': { outlet: 'The Paper', title: 'Kan Li: Serving the nation through science, true to his original aspiration', excerpt: 'A profile on the Nature-cover microflier and his commitment to returning to China.' },
  '2021-zhishi-nature-cover': { outlet: 'Zhishan Academic Circle', title: 'Today’s Nature Cover: buckling-mechanics-assembled wind-seed-inspired 3D microelectronic microflier', excerpt: 'Academic-media interpretation of the Nature cover paper, highlighting the buckling-mechanics assembly strategy and large-scale multiscale fabrication.' },
  '2022-hust-recruit-kankan': { outlet: 'HUST Admissions Office', title: 'Kan Li: devoted to research, an “overpowered” life', excerpt: 'HUST Admissions Office profile: Kan Li’s research-driven journey and his philosophy of scholarship.' },
  '2022-tsinghua-alumni-dandelion': { outlet: 'Tsinghua Alumni Association', title: 'Amazing! He replaced mature dandelion seeds with micro-sensors!', excerpt: 'Tsinghua Alumni Association reports Kan Li and Yong’an Huang’s group replacing mature dandelion seeds with micro-sensors, and their breakthrough in flexible intelligent skin for microfliers.' },
  '2023-haiqu-tongzhan-newyear': { outlet: 'Haiqu United Front', title: 'Returning home for the New Year: witnessing the changes in his hometown', excerpt: 'The Haiqu (Rizhao) United Front department reports the story of high-level returnee Kan Li returning home for the New Year, showing his bond with his hometown.' },
  '2025-baidu-baike-likan': { outlet: 'Baidu Baike', title: 'Kan Li — Professor and Ph.D. Advisor at HUST School of Mechanical Science and Engineering', excerpt: 'Baidu Baike profile: an authoritative summary of his biography, research directions, key achievements, and awards.' },
  '2025-people-daily-returnee': { outlet: "People’s Daily", title: 'From Tsinghua to Cambridge, he returned at 28 to become a professor!', excerpt: 'People’s Daily official account profile: from Tsinghua’s Qian Class to a Cambridge postdoc, joining HUST full-time at 28, tackling the flexible-electronics “packaging paradox” and 3D microfliers.' },
  '2025-people-daily-rizhao': { outlet: 'The Paper', title: 'This “post-90s” from Rizhao became a university professor!', excerpt: 'The Paper feature: the “post-90s” professor Kan Li, from Tsinghua to Cambridge, returning to teach at 28, highlighted by People’s Daily and other media.' },
  '2025-tsinghua-returnee': { outlet: 'Tsinghua University', title: 'Kan Li: tackling the “chokepoint” challenges of microfliers', excerpt: 'Tsinghua Alumni Association “Returned Tsinghua” series: focusing on microflier research aligned with national needs.' },
};
