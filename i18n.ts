export const i18nConfig = {
  defaultLocale: 'de',
  locales: ['en', 'de', 'ru'],
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];
