import { TranslationObject } from "@/lib/i18n/loadTranslation";
import s from "./s.module.css";
import PhotoService from "../PhotoService/index";
import weddingInDenmark from "@/app/public/images/weddingInDenmark.png";
import copenhagenWedding from "@/app/public/images/copenhagenWedding.png";
import weddingOnTheBeach from "@/app/public/images/weddingOnTheBeach.png";
import { generateLinks } from "@/app/commonLinks";
import WidthContainer from "../WidthContainer";

interface Props {
	translation: TranslationObject;
	currentLang: string;
}

export default function SecondBlock({ translation, currentLang }: Props) {
	const links = generateLinks({ translation, currentLang });

	return (
		<WidthContainer className={s.services}>
			<PhotoService
				imagePath={copenhagenWedding}
				altD={links.copenhagenWedding.title}
				link={links.copenhagenWedding}
			/>
			<PhotoService
				imagePath={weddingInDenmark}
				altD={links.weddingInDenmark.title}
				link={links.weddingInDenmark}
			/>
			<PhotoService
				imagePath={weddingOnTheBeach}
				altD={links.weddingOnTheBeach.title}
				link={links.weddingOnTheBeach}
			/>
		</WidthContainer>
	);
}
