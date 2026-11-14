# 课题组网站项目长期记忆（Kan Li Group / kanligroup.com）

## 核心身份
- **用户 = 厉侃（Kan Li）**，华中科技大学机械学院教授、博导。邮箱 **kanli@hust.edu.cn**（prekanli@gmail.com 已弃用）。
- 域名 **kanligroup.com** = 厉侃课题组（Kan Li Group）。
- 核心科学问题：柔性载体上的分布式感知——力/热/电多场耦合下使柔软/曲面/可飞行载体具备分布式原位三维感知；微飞行器为分布式空间感知节点，面向 Physical AI。

## 技术栈与部署
- **Astro 静态站 + GitHub Pages + 自定义域名 kanligroup.com**。仓库根 `GroupWebsite/`；Astro 工程根 `src/`（`astro.config.mjs`、`package.json` 在此）。`public/` 在 `src/public/`。
- 部署：`.github/workflows/deploy.yml`（仓库根，push `main` → `actions/deploy-pages`；`working-directory: src`，产物 `src/dist`）。`npm run build` = `fetch-scholar && astro build`。
- 远端 `kanligroup/kanligroup-website`，main 跟踪 origin/main（2026-07-28 主体 push；2026-10-10 新增 DESIGN.md/MAINTENANCE.md/.workbuddy 已 commit 本地 `9cddde7`，**待 push 同步远端**）。
- （可选）`scripts/deploy-aliyun.sh` 部署到阿里云 OSS+CDN，需 ICP 备案（解决微信打不开/国内速度）。

## 设计系统（详见 DESIGN.md）
- 主色 `--primary:#1a4d8f`，强调 `--accent:#0e8f8a`；三方向色 蓝`#1a4d8f`/青绿`#0f6e58`/紫`#7c3aed`。
- 字体 Display=Sora，Body=Inter；圆角 16/11/999px；阴影 sm/md/lg 统一 `rgba(16,32,56,…)`。
- **唯一样式事实源：`src/src/styles/global.css`**；改样式只动它，并同步 DESIGN.md。

## 内容维护（改 Markdown 即可）
- 集合目录 `src/src/content/`：`members`(21) / `publications`(43) / `directions`(3) / `news` / `media`。schema 见 `src/src/content.config.ts`。
- 头像：`src/public/people/<slug>.jpg` + frontmatter `avatar`；缺省字母占位 SVG。
- 双语：中文 `pages/*.astro`，英文 `pages/en/*.astro`；文案映射 `src/src/i18n/content.ts`、`ui.ts`。

## 维护命令
- 本地预览：`cd src && npm install && npm run dev` → http://localhost:4321
- 抓 Scholar（手动）：`cd src && npm run fetch:scholar`（user=vWZDbKIAAAAJ，失败容错保留缓存）

## 已知问题 / 待办
- ✅ HTTPS / www 已解决（2026-11-14 实测：主域 200、www 301；A 记录 4 条 + www CNAME 均已配置）。旧两条待办作废。
- 微信打不开：境外+无 ICP 备案；迁阿里云 OSS+CDN 并备案才可靠。
- Scholar 指标停在 2026-07-23（5168 / h29 / i10 38）：本机访问 scholar.google.com 超时，需换网络刷新或由 PI 提供新值。fetch-scholar.mjs 已修为失败时保留真实数据日期并记 lastAttemptAt。
- 成员名单待核对：站点 21 档案 = PI + 5 校友 + 15 在读（9 博 + 6 硕），旧记录 17 人，差额需厉侃确认；未确认不得凭空新增。
- frontmatter 含冒号的值需加引号。

## 2026-11-14 内容更新（本地已改，待预览确认后 push）
- 新增论文 2 篇：Adv. Fiber Mater. 2026 温压双感（DOI 10.1007/s42765-026-00762-7）、Smart Mater. Devices 柔性 PZT 综述（DOI 10.70401/smd.2026.0065）。
- 新增新闻 5 条、媒体报道 2 条；AFM 新闻由「接收」更正为「正式发表」（2026-08-27）并补 DOI。
- 成员：令景辉/潘津羽/朱彦臣档案补 PZT 综述成果关联（中英同步）。
- 页面：Home.astro 的 tagEn 增 2 个标签映射；首页「相关报道」由硬编码两家来源改为按日期取最新 4 条。
- 依据与待审项见当次《网站更新对照说明》； Scholar 新数值、成员名单、PZT 综述卷期年份三项待 PI 核实。

## 操作红线
- 设计 token / 组件样式只改 `global.css`，禁止散落同名变量。
- 内容只走 content collections，不硬编码进组件。
- 改完中文同步更新 i18n 英文映射；提交前 `npm run build` 校验 schema。

## 云端记忆（WorkBuddy Library 个人空间）
- 说明文档已镜像到 WorkBuddy 云端资料库（个人空间 `EQxkfjW258iCDpXU8DOyut`），统一收纳于文件夹 **「Kan Li Group 网站」**（https://www.workbuddy.cn/space/d/wqcNzznAFBZ3ngT2qKk3W4），跨终端可读：
  - DESIGN.md：https://www.workbuddy.cn/space/d/DjONFRCAEyMWenRdo0BJBP
  - MAINTENANCE.md：https://www.workbuddy.cn/space/d/qDYJh7wtXtMWkKgRfOBcyQ
  - README.md：https://www.workbuddy.cn/space/d/d1ybhtLaHV4eAJDVz6aThc
- 站点代码/素材/内容（assets、content 集合）仍在 GitHub 仓库；2026-10-10 新增的 3 个文件已 commit 本地，需在有网络+凭据的终端 `git push origin main` 同步。
