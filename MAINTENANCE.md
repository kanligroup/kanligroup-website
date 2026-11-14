# 维护手册 / Maintenance Runbook — Kan Li Group 网站

> 面向"以后直接改这个 project"的日常操作。设计细节见 `DESIGN.md`，项目背景见 `README.md`。
> 站点根目录（Astro 工程）= `src/`，仓库根 = `GroupWebsite/`。

---

## 1. 环境要求
- **Node.js ≥ 18.20**（GitHub Actions 用 Node 20）。本地开发推荐 20 LTS。
- 包管理：`npm`（已锁 `package-lock.json`）。
- 唯一依赖：`astro ^5`。

## 2. 目录速览
```
GroupWebsite/
├── src/                      # ← Astro 工程根（日常在此操作）
│   ├── astro.config.mjs      # 站点配置（site、i18n 中英双语）
│   ├── package.json          # dev / build / preview / fetch:scholar
│   ├── public/               # 静态资源：favicon.svg, logo.svg, people/, gallery/, CNAME
│   ├── scripts/fetch-scholar.mjs
│   └── src/
│       ├── styles/global.css # ★ 所有设计 token 与组件样式（唯一样式事实源）
│       ├── content/          # ★ 内容集合（成员/论文/方向/新闻/媒体），纯 Markdown
│       ├── components/       # Header/Footer/卡片/研究树等 .astro 组件
│       ├── layouts/BaseLayout.astro
│       ├── pages/            # 中文页；pages/en/ 为英文页
│       ├── i18n/             # ui.ts / content.ts / utils.ts 双语映射
│       └── data/scholar.json # Scholar 实时指标（构建时生成）
├── .github/workflows/deploy.yml  # push main → 自动构建部署 GitHub Pages
├── scripts/deploy-aliyun.sh      # （可选）部署到阿里云 OSS+CDN
├── DESIGN.md / README.md / MAINTENANCE.md
```

## 3. 本地预览（改完立即看效果）
```bash
cd src
npm install        # 首次或依赖变更后
npm run dev        # → http://localhost:4321  （Astro 默认端口）
```
改动 `global.css`、组件或 content Markdown 会热更新。按 `Ctrl+C` 退出。

## 4. 构建与部署

### A. GitHub Pages（默认，已上线）
- 工作流：`.github/workflows/deploy.yml`，监听 `main` 分支 push，`working-directory: src`，构建产物 `src/dist` 上传到 Pages。
- `build` 脚本 = `node scripts/fetch-scholar.mjs && astro build`（构建前会先抓一次 Scholar 数据）。
- **操作**：把改动 `git commit && git push origin main` 即可，Actions 自动部署。约 1–2 分钟生效。
- 自定义域名 `kanligroup.com`，CNAME 已在 `public/CNAME`。

### B. 阿里云 OSS + CDN（可选，解决微信打不开/国内速度）
- 脚本：`./scripts/deploy-aliyun.sh`（需先装 `ossutil` 并 `ossutil config`；CDN 绑定域名并开 HTTPS；**必须完成 ICP 备案**否则国内仍拦截）。
- 用法：`BUCKET=kanligroup-website OSS_ENDPOINT=oss-cn-hangzhou.aliyuncs.com ./scripts/deploy-aliyun.sh`。

## 5. 内容维护（改 Markdown 即可，不碰代码）
所有内容在 `src/src/content/` 下，按集合分目录。改完构建即生效。

### 成员 `src/src/content/members/*.md`
字段（frontmatter）：`name, role, is_pi, alumni, joint_training, degree, direction, project, email, avatar, bio, citations, h_index, i10_index, google_scholar, office, affiliation, title`
- 头像：真实照放 `src/public/people/<slug>.jpg`，并加 `avatar: /people/<slug>.jpg`；缺省显示字母占位 SVG `/people/<slug>.svg`。
- `direction` 取值对应三方向色（micro-flyer / flexible-sensor / micro-system）。

### 论文 `src/src/content/publications/*.md`
字段：`title, authors, venue, year, volume, doi, url, type(paper|patent|journal), citations, highlight, cover, direction, tags[]`

### 方向 `src/src/content/directions/*.md`
字段：`title, lead, coordinator, order`（order 控制排序）。

### 新闻 / 媒体 `src/src/content/news|media/*.md`
新闻：`date, title, excerpt, tag, link`。媒体：`date, outlet, category(人物专访|归国故事|科研报道), title, url, excerpt`。

### 双语
- 页面结构：中文在 `src/src/pages/*.astro`，英文在 `src/src/pages/en/*.astro`（薄壳，渲染 `components/pages/*.astro`）。
- 文案映射：`src/src/i18n/content.ts`（方向/成员/新闻/媒体英文）、`ui.ts`（界面词）。新增/改中文文案须同步更新英文映射。

## 6. 设计修改
- 所有视觉 token 与组件样式集中在 **`src/src/styles/global.css`**；改完同步更新 `DESIGN.md` 第 2–6 章。
- 加新组件优先复用 `.card / .btn / .tag / .section / .container` 等现有类，遵循 `DESIGN.md` 第 4、7 章。
- 禁止在 `global.css` 之外散布同名 CSS 变量。

## 7. Scholar 指标数据
- `src/scripts/fetch-scholar.mjs` 在每次 `build` 时抓取 `user=vWZDbKIAAAAJ` 的引用/h-index/i10 指标，写入 `src/src/data/scholar.json`。
- **容错**：抓取失败保留上一次成功缓存（`live:false`），不会让构建崩。2026-11-14 起，失败时保留 `fetchedAt`（真实数据日期），另记 `lastAttemptAt`，避免把失败时间误显示为数据日期。
- 手动刷新（不构建整站）：`cd src && npm run fetch:scholar`。
- **当前缓存**：引用 5168 / h-index 29 / i10 38，数据日期 **2026-07-23**。2026-11-14 实测本机无法访问 `scholar.google.com`（连接超时），需在可访问的网络环境刷新，或由 PI 提供新数值后手工更新 `scholar.json`。「关于」页会显示数据日期与缓存状态，不会把旧数据冒充实时数据。

## 8. 已知问题与待办（维护时留意）
- ✅ **HTTPS / www 域名（2026-11-14 复核已解决）**：`https://kanligroup.com` 返回 200，`https://www.kanligroup.com` 返回 301；DNS 已有 4 条 A 记录（185.199.108/109/110/111.153）与 `www → kanligroup.github.io` 的 CNAME。旧版手册中「HTTPS 未生效」「www 502」两条已作废。
- **微信内置浏览器打不开**：GitHub Pages 在境外 + 域名无 ICP 备案可能被拦截；可靠解法是迁阿里云 OSS+CDN 并完成 ICP 备案（见第 4 节 B）。
- **Scholar 指标待刷新**：见第 7 节，需可访问 Google Scholar 的网络环境。
- **成员名单待核对**：`content/members` 共 21 个文件（含 PI、5 名校友、15 名在读：9 博 + 6 硕）。旧记录为 17 人，差额需厉侃确认；未确认前不要凭空新增成员档案。
- **合作网络页**：已删旧 collab 页，是否补「合作网络」页待定。
- **frontmatter 含冒号需加引号**（如含 `:` 的值用 `"..."` 包裹）。

## 8a. 内容更新记录
- **2026-11-14**：新增 2 篇 2026 论文（Adv. Fiber Mater. 温压双感、Smart Mater. Devices 柔性 PZT 综述）、5 条新闻（乐动机器人合作、ICFE 2026 / 软物质力学大会邀请报告、钱伟长论坛补录、PZT 综述）、2 条媒体报道；AFM 新闻由「接收」更正为「正式发表」并补 DOI；3 位综述作者档案补成果关联；首页「相关报道」改为按日期取最新 4 条；中英映射同步。详见当次《网站更新对照说明》。

## 9. 紧急修复清单
1. 内容错误 → 改对应 Markdown → `git push` → 等 Actions。
2. 样式异常 → 改 `global.css` → 本地 `npm run dev` 验证 → push。
3. 部署失败 → 看 Actions 日志；若 `fetch-scholar` 超时，属正常容错，不影响构建。
4. 域名/HTTPS/微信问题 → 属 GitHub/阿里云控制台操作，不在代码层，按第 8 节处理。
