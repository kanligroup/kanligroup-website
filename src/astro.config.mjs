import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages，自定义域名 kanligroup.com
export default defineConfig({
  site: 'https://kanligroup.com',
  output: 'static',
  trailingSlash: 'ignore',
});
