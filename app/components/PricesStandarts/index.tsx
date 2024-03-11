// PricesStandarts
import React from "react";
import WidthContainer from "../WidthContainer";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import Image from "next/image";
import bouquet_1 from "@/app/public/images/prices/hannah-busing-6NUUZZ16hJk-unsplash.jpg";
import bouquet_2 from "@/app/public/images/prices/nick-karvounis-6vwrVGrxOKE-unsplash.jpg";
import s from "./s.module.css";

type Props = {
	translation: TranslationObject;
};

export default function PricesStandarts({ translation }: Props) {
	// const locations: String[] = [
	// 	translation("views.serviceAndPrice.location_1"),
	// 	translation("views.serviceAndPrice.location_2"),
	// 	translation("views.serviceAndPrice.location_3"),
	// ];
	const definitions: any[] = [
		<section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.standart_1_definitions_1")}} />,
		<section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.standart_1_definitions_2")}} />,
		<section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.standart_1_definitions_3")}} />,
		<section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.standart_1_definitions_4")}} />,
		<section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.standart_1_definitions_5")}} />,
		<section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.standart_1_definitions_6")}} />,
		<section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.standart_1_definitions_7")}} />
	]
	const standartTwoDefenition: any = <section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.standart_2_definition")}} />
	return (
		<WidthContainer>
			<section className={s.section_standart}>
				<div className={s.standart_content}>
					<article className={s.standart}>
						<div className="">
							<h2 className={s.standarts_title}>
								{translation("views.serviceAndPrice.standart_1")}
							</h2>
							<ul className={s.prices_list}>
								{definitions.map((el, index)=> <li className={s.prices_item} key={index}>{el}</li>)}
							</ul>
						</div>
						<div className={s.img_wrapper}>
							<Image
								className={`${s.standar_img} ${s.standar_img__1}`}
								src={bouquet_1}
								loading="lazy"
								placeholder="blur"
								alt={translation("views.serviceAndPrice.altBouquet_1")}
							/>
						</div>
					</article>

					<article className={s.standart}>
						<div className={s.standart_b}>
							<div className="">
								<h2 className={s.standarts_title}>
									{translation("views.serviceAndPrice.standart_2")}
								</h2>
							</div>
							<div className={s.standartTwoDefenition}>
								{standartTwoDefenition}
							</div>
						</div>
						<div className={s.img_wrapper}>
							<Image
								className={`${s.standar_img} ${s.standar_img__2}`}
								src={bouquet_2}
								loading="lazy"
								placeholder="blur"
								alt={translation("views.serviceAndPrice.altBouquet_2")}
							/>
						</div>
					</article>
				</div>
			</section>
		</WidthContainer>
	);
}
