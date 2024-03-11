//PricesServices
import WidthContainer from "../WidthContainer";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import Image from "next/image";
import limousine from "@/app/public/images/prices/maria-orlova-13naxFTumNA-unsplash.jpg";
import window from "@/app/public/images/prices/jonathan-borba-HabFYy1Iic0-unsplash.jpg";
import s from "./s.module.css";

type Props = {
	translation: TranslationObject;
};

export default function PricesServices({ translation }: Props) {
	const services: String = translation("views.serviceAndPrice.service_1");

	return (
		<WidthContainer>
			<section className={s.price_section}>
				<h1 className="title">{translation("views.serviceAndPrice.title")}</h1>
				<div className={s.content_wrapper}>
					<div className={s.content}>
						<p className={s.services_item}>{services}</p>
						<div>
							<Image
								className={s.img_limousine}
								src={limousine}
								loading="lazy"
								placeholder="blur"
								alt={translation("views.serviceAndPrice.imageLimousine")}
							/>
						</div>
					</div>
					<div className={s.window_wrapper}>
						<Image
							className={s.img_window}
							src={window}
							loading="lazy"
							placeholder="blur"
							alt={translation("views.serviceAndPrice.altWindow")}
						/>
					</div>
				</div>
			</section>
		</WidthContainer> 
	);
}
