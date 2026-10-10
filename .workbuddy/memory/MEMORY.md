# 课题组网站项目长期记忆（Kan Li Group / kanligroup.com）

## 核心身份
- **用户 = 厉侃（Kan Li）**，华中科技大学机械学院教授、博导。邮箱 **kanli@hust.edu.cn**（prekanli@gmail.com 已弃用）。
- 域名 **kanligroup.com** = 厉侃课题组（Kan Li Group）。
- 核心科学问题：柔性载体上的分布式感知——力/热/电多场耦合下使柔软/曲面/可飞行载体具备分布式原位三维感知；微飞行器为分布式空间感知节点，面向 Physical AI。

## 技术栈与部署
- **Astro 静态站 + GitHub Pages + 自定义域名 kanligroup.com**。仓库根 `GroupWebsite/`；Astro 工程根 `src/`（`astro.config.mjs`、`package.json` 在此）。`public/` 在 `src/public/`。
- 部署：`.github/workflows/deploy.yml`（仓库根，push `main` → `actions/deploy-pages`；`working-directory: src`，产物 `src/dist`）。`npm run build` = `fetch-scholar && astro build`。
- 远端 `kanligroup/kanligroup-website`，main 跟踪 origin/main（2026-07-28 已成功 push）。
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
- HTTPS 未生效：GitHub Pages Settings→Pages→勾 Enforce HTTPS（灰显则取消保存再重勾）。
- www.kanligroup.com 502：阿里云 DNS 缺 www 记录，加 CNAME `www→kanligroup.github.io`。
- 微信打不开：境外+无 ICP 备案；迁阿里云 OSS+CDN 并备案才可靠。
- 疑似 2 名在读生档案缺失，待厉侃确认补全。
- frontmatter 含冒号的值需加引号。

## 操作红线
- 设计 token / 组件样式只改 `global.css`，禁止散落同名变量。
- 内容只走 content collections，不硬编码进组件。
- 改完中文同步更新 i18n 英文映射；提交前 `npm run build` 校验 schema。
