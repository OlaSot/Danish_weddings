import { TranslationObject } from '@/lib/i18n/loadTranslation';

interface Props {
    translation: TranslationObject;
    currentLang: string
  }
  

export function generateLinks({translation, currentLang}: Props) {
  return {
    'weddingInDenmark': { title: translation('views.homePage.weddingInDenmark'), path: `/${currentLang}/wedding-in-denmark` },
    'copenhagenWedding': { title: translation('views.homePage.copenhagenWedding'), path: `/${currentLang}/copenhagen-wedding` },
    'weddingOnTheBeach': { title: translation('views.homePage.weddingOnTheBeach'), path: `/${currentLang}/wedding-on-the-beach` },
    'informationRecognition': { title: translation('views.homePage.weddingOnTheBeach'), path: `/${currentLang}/information-recognition` },
    'marriageLaw': { title: translation('views.homePage.weddingOnTheBeach'), path: `/${currentLang}/marriage-law` },
    "importanceInternationalMarriageDescrLink" : {title: translation('views.homePage.learnMore'), path: `/${currentLang}/marriage-law`},
    "informationRecognitionDescrLink" : {title: translation('views.homePage.learnMore'), path: `/${currentLang}/information-recognition`},
    "readMoreAchievementsLink" : {title: translation('views.homePage.achievementsLink'), path: `/${currentLang}/achievements`},

  }  
}
