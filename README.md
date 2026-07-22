# 课题组网站 (Group Website)

> 分布式微飞行器感知节点为 Physical AI 提供数据支撑

独立 workspace，用于课题组官网的制作与长期维护。**不放在 `Claw` 混合工作区。**

## 一、项目定位
- 面向学术同行、合作者、招生对象公开课题组研究方向、成员、成果与动态。
- 静态站点优先，便于托管、版本管理与可重复维护。

## 二、信息架构（建议页面）

| 页面 | 内容 | 内容负责 |
|------|------|---------|
| 首页 Home | 课题组一句话定位、核心主题、导航入口 | 厉侃（PI） |
| 研究方向 Research | 4 个子方向卡片 + 简介 + 代表成果 | 厉侃（PI）+ 各方向统筹（侯超 / 刘奕辰 / 谢宏伟） |
| 团队成员 People | 厉侃（PI）+ 团队名单、头像、简介 | 厉侃（PI） |
| 研究成果 Publications | 论文、专利列表（含 DOI / 链接） | 厉侃（PI） |
| 招生 Admissions | 招生方向、要求（985/211 优先）、联系方式 | 厉侃（PI） |
| 新闻 News | 组会、获奖、学术交流动态 | 秘书 / 轮值 |
| 关于/联系 About | 课题组简介、地址、邮箱、合作意向 | 厉侃（PI） |

### 四个研究方向
1. **柔性耐高温传感器**（统筹：侯超）
2. **柔性微飞行器平台**（统筹：刘奕辰）
3. **系统集成：感知–通信–驱动**（统筹：谢宏伟）
4. **能源与 AI 交叉**

## 三、目录结构
```
GroupWebsite/
├── src/          # 网站源码（搭原型时填入）
├── assets/       # 图片、Logo、成员头像等素材
├── data/         # 结构化内容（成员、成果 Markdown/JSON）
├── docs/         # 信息架构、维护说明、设计稿
└── README.md     # 本文件
```

## 四、技术栈与部署（已定稿）
- **技术栈：Astro**（静态生成器；内容用 Markdown/MDX + content collections 管理成员/成果/方向，非前端同学改 Markdown 即可，不碰代码）
- **部署：GitHub Pages**（用户已有 GitHub 账号）
- **自定义域名：kanligroup.com**（已在阿里云购买）
- 产物：纯静态 HTML，可托管于任意平台

### 阿里云 DNS 配置（需用户在阿里云控制台操作）
1. 阿里云「域名解析」→ kanligroup.com
2. 添加记录：
   - A 记录：主机 `@` → `185.199.108.153`（GitHub Pages IP；另可选 109.153 / 110.153 / 111.153）
   - A 记录：主机 `www` → 同上 IP
   - 或 CNAME：主机 `www` → `<github用户名>.github.io`
3. GitHub 仓库 Settings → Pages → Custom domain 填 `kanligroup.com`，勾选 Enforce HTTPS

### GitHub 仓库（需用户创建或授权）
- 仓库名建议 `kanligroup-website`（公开），GitHub Pages 指向分支 `/root` 或 Actions 构建
- 当前 GitHub 连接器未连接，可用户手动建仓库；连接后由我推送并启用 Pages

### 自动部署（GitHub Actions，已生成）
- 工作流文件：`.github/workflows/deploy.yml`（仓库根；push `main` 自动构建并部署到 GitHub Pages）
- 约定：仓库根 = 本 GroupWebsite 目录，网站代码在 `src/` 子目录，工作流已配置 `working-directory: src`
- 仓库 Settings → Pages → Source 选 "GitHub Actions"

## 五、维护约定
- 内容维护走 `src/src/content/` 下的 Markdown 集合（members / publications / directions），页面由模板渲染，改 Markdown 即更新。
- 成员、成果更新由厉侃（PI）及各方向统筹提供素材，统一在此 workspace 提交。

## 重要订正（2026-07-21）
- 网站主体 = **厉侃（Kan Li / Li Kan）本人**，即课题组 PI；不存在"李坎"这一独立人物。
- 域名 kanligroup.com = 厉侃课题组；英文组名 Kan Li Group 即厉侃。
- 厉侃真实邮箱：kanli@hust.edu.cn（华科官网）。
- 已删除原"合作与关联"页（该页错误地将厉侃当作外部合作者介绍），导航移除"合作"。
- 侯超 / 刘奕辰 / 谢宏伟 为各研究方向统筹（原型占位，待厉侃确认真实姓名与角色）。
- 图文一致性需校验（图与说明对应）；图片放 `src/public/` 或 `src/src/assets/`。

## 六、进度
- [x] 定 workspace（GroupWebsite 独立目录）
- [x] 定技术栈与部署：Astro + GitHub Pages + kanligroup.com
- [x] 搭建 Astro 原型（4 方向 / 成员 / 成果页，已 build 生成 dist/）
- [ ] 用户：阿里云 DNS 解析配置
- [ ] 用户：创建 GitHub 仓库并连接，部署上线
