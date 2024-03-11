// ContactsBanner
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import WidthContainer from "../WidthContainer";
import Image from "next/image";
import contactImage from "@/app/public/images/contacts/kerri-shaver-xepikEyPgmI-unsplash.jpg";
import s from "./s.module.css";

type Props = {
	translation: TranslationObject;
};

export default function ContactsBanner({ translation }: Props) {
	return (
		<section className={s.contacts}>
			<div className={s.img_wrapper}>
				<Image
					className={s.contactImage}
					src={contactImage}
					loading="lazy"
					placeholder="blur"
					alt={translation("views.contacts.altImg")}
				/>
			</div>
			<WidthContainer>
				<div className={s.content_wrapper}>
					<p className={s.callus}>{translation("views.contacts.slogan")}</p>
				</div>
			</WidthContainer>
		</section>
	);
}
