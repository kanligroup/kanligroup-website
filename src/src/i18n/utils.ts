import type { AstroGlobal } from 'astro';

export type Locale = 'zh' | 'en';
export const LOCALES: Locale[] = ['zh', 'en'];
export const DEFAULT_LOCALE: Locale = 'zh';

/** 从当前 URL 推断语言：以 /en/ 或 /en 开头 → 英文，否则中文 */
export function getLocaleFromUrl(astro: AstroGlobal): Locale {
  const path = astro.url.pathname;
  return path.startsWith('/en/') || path === '/en' ? 'en' : 'zh';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en';
}

/** 生成切换语言后的当前页 URL（保留路径，仅增删 /en 前缀） */
export function switchHref(astro: AstroGlobal, target: Locale): string {
  const path = astro.url.pathname;
  const stripped = path.replace(/^\/en/, '') || '/';
  if (target === 'en') {
    return stripped === '/' ? '/en/' : `/en${stripped}`;
  }
  return stripped === '/' ? '/' : stripped;
}

export const localeName: Record<Locale, string> = { zh: '中', en: 'EN' };

/** 根据语言返回站内链接（配合 astro.config 的 i18n 配置） */
export function localeUrl(astro: AstroGlobal, target: Locale, path: string): string {
  // 复用 astro:i18n 生成的相对链接
  // 注意：此函数仅用于非页面级（如组件内部），页面级优先用 getRelativeLocaleUrl
  const base = target === 'en' ? '/en' : '';
  if (path === '/') return target === 'en' ? '/en/' : '/';
  return `${base}${path}`;
}
