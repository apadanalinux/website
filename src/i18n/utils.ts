import { ui, defaultLang, type Locale } from './translations';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

export function isRTL(lang: Locale): boolean {
  return lang === 'fa';
}

/**
 * Generates the equivalent URL path in another language
 * preserving the remaining path segments.
 */
export function getRouteForLocale(pathname: string, targetLang: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  
  // If first segment is a known locale, replace it
  if (segments.length > 0 && (segments[0] === 'fa' || segments[0] === 'en')) {
    segments[0] = targetLang;
    return `/${segments.join('/')}`;
  }
  
  // Otherwise prefix with target locale
  return `/${targetLang}${pathname.startsWith('/') ? pathname : '/' + pathname}`;
}
