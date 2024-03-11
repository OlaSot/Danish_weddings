import React from 'react'
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import s from "./s.module.css";
import WidthContainer from '@/app/components/WidthContainer';

type Props = {
	params: { locale: Locale };
};

export default async function InformationRecognition({ params }: Props) {
  const translation = await getTranslation(params.locale);
  const title = translation(`views.informationRecognition.title`);
  const mainInfo = <span dangerouslySetInnerHTML={{__html: translation(`views.informationRecognition.mainInformation`)}} />
  return (
    <WidthContainer>
      <section className={s.recognitionBlock}>
        <h1 className={s.title}>{title}</h1>
        <span className={s.mainInfo}>{mainInfo}</span>
      </section>
    </WidthContainer>
  )
}
