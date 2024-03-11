import { TranslationObject } from '@/lib/i18n/loadTranslation';

interface Props {
    translation: TranslationObject;
    currentLang: string
  }
  

export function generateNavLinks({translation, currentLang}: Props) {
  
  return [
    { title: translation('nav.linksInNav.main'), path: `/${currentLang}` },
    { title: translation('nav.linksInNav.serviceAndPrice'), path: `/${currentLang}/service-and-price` },
    { title: translation('nav.linksInNav.howToMarry'), path: `/${currentLang}/how-to-marry` },
    { title: translation('nav.linksInNav.contact'), path: `/${currentLang}/contact` },
  ];
}
