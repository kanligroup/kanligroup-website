# DESIGN.md — Kan Li Group 课题组网站设计系统

> 本文件是 `kanligroup.com` 官网的**单一设计事实来源（single source of truth）**。
> 所有视觉决策（色彩、排版、间距、阴影、组件）都以本文件 + `src/src/styles/global.css` 为准。
> 新增/修改任何页面或组件前，先读本文件；改了 global.css 后，回来同步更新第 2–6 章。
> 可被 Cursor / Claude Code / WorkBuddy 等 AI 代理直接消费。

---

## 1. Visual Theme & Atmosphere（视觉主题与氛围）

- **设计哲学**：学术严谨 × 科技通透。以深蓝为主建立信任感，青绿为强调传递"柔性/感知"的研究气质，紫色点出第三个方向。整体走明亮、留白充足、轻微毛玻璃与柔和投影的"轻科技学术"路线。
- **视觉基调**：专业、通透、克制、有呼吸感。
- **核心视觉特征关键词**：`深蓝信任感` · `青绿感知` · `方向三色` · `轻毛玻璃` · `柔和浮起投影`
- **光影与质感倾向**：纯扁平底色 + 微阴影（`shadow-sm/md/lg`）；导航栏与 Hero 使用 `backdrop-filter` 毛玻璃；Hero 叠加缓慢旋转的"感知场环"（呼应写轮眼式 Logo）。无重质感、无拟物。

---

## 2. Color Palette & Roles（调色板与角色）

源文件：`src/src/styles/global.css` `:root`。所有值均为线上实际使用值。

### Primary — 品牌主色（深蓝）
| 角色 | HEX | CSS 变量 | 使用场景 |
|------|-----|----------|----------|
| Primary | `#1a4d8f` | `--primary` | 主色：链接、标题强调、方向卡顶条、主按钮文字 |
| Primary 600 | `#205ba6` | `--primary-600` | hover/渐变中段 |
| Primary 700 | `#143a6b` | `--primary-700` | 渐变深端、深色文字、Hero 底色 |

### Accent — 强调色（青绿）
| 角色 | HEX | CSS 变量 | 使用场景 |
|------|-----|----------|----------|
| Accent | `#0e8f8a` | `--accent` | 标签、激活态、focus 轮廓、章节标题左侧竖条 |
| Accent Soft | `#e3f4f3` | `--accent-soft` | 标签/徽章背景、年份胶囊背景 |

### Neutral / Gray Scale — 中性灰阶
| 角色 | HEX | CSS 变量 | 使用场景 |
|------|-----|----------|----------|
| Ink（标题） | `#15233a` | `--ink` | h1–h4 标题色 |
| Text（正文） | `#2c3645` | `--text` | 正文、卡片正文 |
| Muted | `#66727f` | `--muted` | 次要文字、日期、说明 |
| Line（描边） | `#e7ebf1` | `--line` | 边框、分隔线、卡片默认边框 |
| Surface | `#ffffff` | `--surface` | 卡片/表面背景 |
| Bg | `#fbfcfe` | `--bg` | 页面底色 |
| Bg Soft | `#f4f7fb` | `--bg-soft` | 区块底、引用块、研究树图背景 |

### Brand & Dark — 品牌深色
| 角色 | HEX | CSS 变量 / 位置 | 使用场景 |
|------|-----|----------------|----------|
| Header 底 | `rgba(26,77,143,.94)` | `header.site` 背景 | 吸顶导航（毛玻璃） |
| Footer 底 | `#11203a` | `footer.site` 背景 | 页脚 |

### Direction Accents — 三方向色（贯穿全站）
| 方向 | HEX | CSS 变量 | 对应 |
|------|-----|----------|------|
| 蓝 | `#1a4d8f` | `--dir-blue` | 柔性电子微飞行器 |
| 青绿 | `#0f6e58` | `--dir-teal` | 耐高温柔性多模态传感器 |
| 紫 | `#7c3aed` | `--dir-purple` | 柔性智能微系统 |

### Semantic / Extra — 语义与衍生色
| 角色 | HEX | CSS 变量 / 位置 | 使用场景 |
|------|-----|----------------|----------|
| Joint 标签 | `#b45309` / `#fef3c7` | `.tag--joint` | 联合培养标记（文字/背景） |
| Media 来源 | `#7a4db8` / `#f1ebfd` | `.media-outlet` | 媒体报道来源徽章 |
| 选中 | `rgba(26,77,143,.16)` | `::selection` | 文本选中底色 |
| Focus 轮廓 | `2px solid #0e8f8a` | `:focus-visible` | 键盘焦点 |
| Hero 光晕 A/B | `rgba(26,77,143,.05)` / `rgba(14,143,138,.045)` | `--glow-a` / `--glow-b` | 页面角落径向光 |

### Shadow Colors — 阴影色
所有阴影统一使用 `rgba(16,32,56, …)`（深蓝黑），见第 6 章。

---

## 3. Typography Rules（排版规则）

### Font Family
- **Display（标题）**：`"Sora", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif` → 变量 `--font-display`。Google Fonts 加载权重 400/500/600/700/800。
- **Body（正文）**：`"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif`。
- **中文回退**：PingFang SC（macOS/iOS）→ Microsoft YaHei（Windows）→ Noto Sans SC。

### Type Scale（实际取值）
| 层级 | 字号 | 字重 | 行高 | 字距 | 字体 | 应用 |
|------|------|------|------|------|------|------|
| Display Hero | `clamp(36px, 6vw, 62px)` | 800 | 1.12 | -0.03em | Display | `.hero h1` |
| H2 Section | `clamp(22px, 3vw, 28px)` | 800 | 1.28 | -0.02em | Display | `h2.section` |
| Stat Num | 34px | 800 | 1 | -0.02em | Display | `.stat-num` |
| Lead Question | 19px | 600 | 1.75 | — | Body | `.lead-question` |
| Card Title | 18px | 700 | — | — | Display | `.card h3` |
| Body | 16px（基准） | 400 | 1.72 | — | Body | `body` |
| Meta / Small | 13–14px | 400/600 | 1.6 | — | Body | 日期、说明、`.pub-meta` |
| Nano（标签） | 11.5–12px | 600/700 | — | .14em(大写) | Body | `.tag` / `.kicker` |

### 设计哲学
- 标题用 Sora 收紧字距（-0.01em ~ -0.03em）建立现代、利落的学术科技感；正文用 Inter 配 1.72 行高保证长文可读性。
- 层级靠**字号 + 字重 + 颜色（ink/primary/muted）**三重区分，而非堆装饰。
- `kicker` / `tag` 用大写 + 字距拉开，作为小标签的"呼吸细节"。

---

## 4. Component Stylings（组件样式）

### Buttons（全部为胶囊形 radius: 999px）
基类 `.btn`：`padding: 12px 22px; font-size: 15px; font-weight: 600; border: 1.5px solid transparent; transition: transform .16s, box-shadow .18s;`，hover `translateY(-2px)`。

| 变体 | 背景 | 文字 | 边框 | hover |
|------|------|------|------|-------|
| `.btn-primary` | `#fff` | `--primary` | 无 | 文字 `--primary-700`，阴影 `0 14px 32px rgba(10,25,55,.28)` |
| `.btn-ghost` | `rgba(255,255,255,.08)` | `#fff` | `rgba(255,255,255,.5)` | 背景 `.18` |
| `.btn-solid` | `linear-gradient(135deg, --primary, --primary-600)` | `#fff` | 无 | 渐变转 `(600,700)` |
| `.btn-outline` | `#fff` | `--primary` | `--line` | 边框 `--primary` |

### Cards
- `.card`：`border: 1px solid var(--line); border-radius: 16px; padding: 22px; background: var(--surface); box-shadow: var(--shadow-sm);`，hover `translateY(-6px) + shadow-md + border #c9d8ec`，过渡 `.35s var(--ease-out-expo)`。
- `.card--direction`：顶部 4px 渐变条 `linear-gradient(90deg, --primary, --accent)`。
- 网格：`.cards` = `grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 20px`。

### Inputs（当前站点无表单，新增时遵循此基线）
- 边框 `1px solid var(--line)`，圆角 `11px`（`--radius-sm`），内距 `10px 12px`。
- Focus：`border-color: var(--primary); box-shadow: 0 0 0 3px rgba(26,77,143,.12)`；沿用 `:focus-visible` 的 accent 轮廓。
- placeholder 颜色 `--muted`。

### Navigation（吸顶）
- `header.site`：`position: sticky; top:0; z-index:50; height:62px; background: rgba(26,77,143,.94); backdrop-filter: saturate(150%) blur(10px);`。
- `nav a`：`color: rgba(255,255,255,.86); padding: 8px 12px; font-size:15px; border-radius:8px;`，hover 变白 + 8% 白底 + 下划线 `scaleX` 展开；`[aria-current="page"]` 白字 + 14% 白底。

### Badges / Tags
- `.tag`：`padding: 2px 10px; font-size:12px; font-weight:600; color: var(--accent); background: var(--accent-soft); border-radius:999px`。
- `.tag--joint`（琥珀）：`#b45309` / `#fef3c7`。`.media-outlet`（紫）：`#7a4db8` / `#f1ebfd`。
- `.badge`（论文）：`padding: 0 .45rem; font-size:.7rem; font-weight:700; border-radius:5px; background: var(--primary); color:#fff`。
- `.kicker`：`font-size:12px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color: var(--accent)`。

### Footer
- `footer.site`：`background:#11203a; color:#aeb9c9; padding:40px 0 28px; font-size:14px; margin-top:56px`。
- 顶部 3px 渐变条 `linear-gradient(90deg, --primary, --accent, --dir-purple)`；右下径向光。
- `.f-brand` 白字 700/16px；`.f-links a` `#cfe0f5` → hover `#fff`（下划线展开）。

### Modals / Dialogs
当前站点未使用模态框；如需新增，建议：遮罩 `rgba(17,32,58,.5)` + `backdrop-filter: blur(4px)`，内容区 `background: var(--surface); border-radius:16px; box-shadow: var(--shadow-lg)`，入场 `transform: translateY(8px)+opacity` `.28s var(--ease-out-expo)`。

---

## 5. Layout Principles（布局原则）

- **Spacing System**：以 **4px** 为基数。常用值：4 / 8 / 12 / 16 / 20 / 22（卡片/容器内距）/ 24 / 32 / 48 / 76（区块）。组件 hover 位移统一 6px。
- **Grid System**：卡片栅格 `auto-fill, minmax(260px,1fr)`，间距 20px；统计卡 `repeat(3,1fr)` 间距 16px（≤600px 单列）。
- **Container**：`.container { max-width: 1100px; margin: 0 auto; padding: 0 22px; }`（≤640px 内距 16px）。研究树图最大宽度 1120px。
- **Section Spacing**：`section.block { padding: clamp(48px, 7vw, 76px) 0; }`；相邻区块 `border-top: 1px solid var(--line)`。
- **留白哲学**：内容居中、最大宽 1100px，区块上下大留白（48–76px）营造学术呼吸感；Hero 用大幅上下 padding（clamp 64–116px）制造首屏冲击。

---

## 6. Depth & Elevation（深度与层级）

### Shadow System（统一 rgba(16,32,56, …)）
```css
--shadow-sm: 0 1px 2px rgba(16,32,56,.05), 0 2px 6px rgba(16,32,56,.05);
--shadow-md: 0 8px 22px rgba(16,32,56,.10);
--shadow-lg: 0 18px 44px rgba(16,32,56,.14);
```
- 推荐扩展（当前未定义，新增可用）：`--shadow-xs: 0 1px 2px rgba(16,32,56,.06)`；`--shadow-2xl: 0 28px 64px rgba(16,32,56,.18)`。
- 导航阴影：`0 1px 0 rgba(255,255,255,.08), 0 6px 20px rgba(16,32,56,.10)`。
- Hero 标题文字阴影：`0 2px 24px rgba(8,20,44,.28)`。

### Surface Layers
`--bg (#fbfcfe)` → `--bg-soft (#f4f7fb)` → `--surface (#fff)` → overlay（Hero/Footer 深色块）。

### Z-index Scale
`header: 50` · `hero 内容层: 1/2/3`（`scroll-cue: 3`）· `reveal/hover: 自动` · 模态（建议）`1000`。

### Backdrop Effects
导航 `backdrop-filter: saturate(150%) blur(10px)`；Hero 角落径向光 + 缓慢旋转"感知场环"（60s linear，尊重 `prefers-reduced-motion`）。

---

## 7. Do's and Don'ts（设计规范与禁忌）

**Do's**
1. 主色只用 `--primary` 系，强调只用 `--accent`；方向色严格对应三方向（蓝/青绿/紫）。
2. 间距走 4px 倍数；圆角卡片用 16px、小元素用 11px、胶囊用 999px。
3. 新增页面优先复用 `.card / .section / h2.section / .container` 等现有类。
4. 移动端用现有 `max-width` 断点（640/600/720），不要另起一套。
5. 动画统一缓动 `--ease-out-expo` / `--ease-out-quart`，并包裹 `prefers-reduced-motion` 兜底。
6. 内容改 Markdown（content collections），不硬编码进组件。
7. 中英文案同步更新 `src/src/i18n/` 映射。

**Don'ts**
1. 不要引入与深蓝/青绿无关的高饱和色（如纯红、亮橙）破坏学术克制感。
2. 不要用重阴影、硬黑边、拟物质感。
3. 不要把正文行高压到 <1.6（中文可读性会崩）。
4. 不要把按钮做成直角（必须胶囊或圆角）。
5. 不要删除 Hero 的 `reveal`/`hero-field` 动画逻辑而不提供 reduced-motion 兜底。
6. 不要在 `global.css` 之外散布同名 CSS 变量，避免来源分裂。
7. 不要绕过 content collections 直接写死成员/论文/新闻数据。

---

## 8. Responsive Behavior（响应式行为）

### Breakpoints（当前实际使用，桌面优先）
| 断点 | 生效（max-width） | 行为 |
|------|------------------|------|
| Mobile | `640px` | 容器内距 16px；按钮内距缩小；卡片内距 18px |
| Stat→1col | `600px` | `.stat-grid` 转单列 |
| Hide cue | `720px` | 隐藏 Hero 滚动提示 |

**推荐扩展（未来响应式重构）**：`mobile <640` / `tablet 640–1024` / `desktop 1024–1440` / `wide >1440`，并补 `min-width` 正向断点。

### Touch Targets
导航项、按钮实际高度约 31–43px；**建议所有可点元素 ≥44px**（移动端按钮内距已接近，导航 a 可加 `min-height`）。

### 折叠策略
- 导航在窄屏 `overflow-x: auto`（隐藏滚动条），不换行折叠为汉堡菜单。
- 卡片栅格 `auto-fill` 自动从多列降到单列。
- 页脚 `.footer-inner` ≤640px 改为纵向排列。

### Font Scaling
标题用 `clamp()` 自适应（Hero 36→62px，Section 22→28px）；正文基准 16px 不缩放；窄屏仅收紧容器与部分组件内距，不缩正文。

---

## 9. Agent Prompt Guide（AI 代理提示指南）

### Quick Reference
- 主色 `--primary:#1a4d8f`；强调 `--accent:#0e8f8a`；三方向色 `--dir-blue/-teal/-purple`。
- 字体 Display=Sora，Body=Inter；圆角 16/11/999px；阴影 sm/md/lg 见第 6 章。
- 改样式只动 `src/src/styles/global.css`；改内容只动 `src/src/content/*`；双语动 `src/src/i18n/*`。
- 设计事实以本 DESIGN.md 为最终依据。

### Component Prompts（可直接复制）
1. "用 `--card--direction` 风格生成一个研究方向卡片，顶部 4px 渐变条用 `--dir-teal`，标题 18px Sora 700，正文 14.5px。"
2. "做一个吸顶导航，背景 `rgba(26,77,143,.94)` + `backdrop-filter: blur(10px)`，激活态白色 14% 底色，下划线 hover 展开。"
3. "生成一个 pill 按钮 `.btn-solid`，渐变 `135deg --primary → --primary-600`，hover 加深，位移 -2px。"
4. "写一个统计卡 `.stat`，顶部 4px 用 `--sc` 变量着色，数字 34px Sora 800，三列网格 ≤600px 单列。"
5. "加一个青绿标签 `.tag`，背景 `--accent-soft`，文字 `--accent`，圆角 999px，12px 600。"
6. "把某区块做成 `section.block`，上下 `clamp(48px,7vw,76px)`，相邻区块加 1px 顶边。"

### Iteration Guide（8–10 条）
1. 先读 `global.css` 与本项目 DESIGN.md，复用既有变量与类，避免新建色值。
2. 任何新颜色必须从第 2 章调色板取；确需新增先在本文件登记。
3. 保持 4px 间距基数与 16/11/999px 圆角体系一致。
4. 所有过渡用 `--ease-out-expo`/`--ease-out-quart`，并加 `prefers-reduced-motion` 兜底。
5. 组件优先用现有 `.card / .tag / .btn / .section` 组合，而非从零写。
6. 改动后本地 `npm run dev` 实测桌面 + 移动（640px）两种宽度。
7. 中文文案改完同步更新 `i18n/content.ts` 与 `ui.ts` 的英文映射。
8. 不要为"好看"加重阴影/高饱和色；克制是本站基调。
9. 图片放 `src/public/`，头像放 `src/public/people/<slug>.jpg` 并加 `avatar` frontmatter。
10. 提交前运行构建（`npm run build`）确认 content schema 校验通过。
