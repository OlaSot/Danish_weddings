import { TranslationObject } from "@/lib/i18n/loadTranslation";
import s from "./s.module.css";
import flowerWreath from "@/app/public/images/block3/weddingwreath.jpg";
import flowerTable from "@/app/public/images/block3/flowertable.png";
import flowerBouquet from "@/app/public/images/block3/flowerbouquet.png";
import mrNms from "@/app/public/images/block3/mrNms.png";
import WidthContainer from "../WidthContainer";
import PhotoWithLine from "../PhotoWithLine";
import PhotoWithLineDescr from "../PhotoWithLineDescr";
import { generateLinks } from "@/app/commonLinks";

interface Props {
  translation: TranslationObject;
  currentLang: string;
}

export default function ThirdBlock({ translation, currentLang }: Props) {
  const {importanceInternationalMarriageDescrLink, informationRecognitionDescrLink} = generateLinks({translation, currentLang});

  return (
    <WidthContainer style={{ padding: 0 }}>
      <div className={s.container}>
        <div className={s.photoTextContainer}>
          <PhotoWithLine
            imagePath={flowerWreath}
            alt={translation("views.homePage.taxRecognition")}
          />
          <PhotoWithLineDescr
            title={translation("views.homePage.taxRecognition")}
            description={translation("views.homePage.taxRecognitionDescr")}
            reversed={true}
          />
        </div>
        <div className={`${s.photoTextContainerReversed}`}>
          <PhotoWithLine
            imagePath={flowerTable}
            reversed={true}
            alt={translation("views.homePage.nameChanging")}
          />
          <PhotoWithLineDescr
            title={translation("views.homePage.nameChanging")}
            description={translation("views.homePage.nameChangingDescr")}
          />
        </div>
        <div className={`${s.photoTextContainer} `}>
          <PhotoWithLine
            imagePath={mrNms}
            alt={translation("views.homePage.importanceInternationalMarriage")}
          />
          <PhotoWithLineDescr
            title={translation(
              "views.homePage.importanceInternationalMarriage"
            )}
            description={translation("views.homePage.importanceInternationalMarriageDescr")}
            reversed={true}
            learnMoreLink={importanceInternationalMarriageDescrLink}
          />
        </div>
        <div className={`${s.photoTextContainerReversed} `}>
          <PhotoWithLine
            imagePath={flowerBouquet}
            reversed={true}
            alt={translation("views.homePage.informationRecognition")}
          />
          <PhotoWithLineDescr
            title={translation("views.homePage.informationRecognition")}
            description={translation("views.homePage.informationRecognitionDescr")}
            learnMoreLink={informationRecognitionDescrLink}
          />
        </div>
      </div>
    </WidthContainer>
  );
}
