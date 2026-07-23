import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages，自定义域名 kanligroup.com
export default defineConfig({
  site: 'https://kanligroup.com',
  output: 'static',
  trailingSlash: 'ignore',
  // 中英双语：中文为默认语言（根路径），英文置于 /en/ 下
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    prefixDefaultLocale: false,
  },
});
