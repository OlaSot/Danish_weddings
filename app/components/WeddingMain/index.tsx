// WeddingMain
import React from "react";
import Image from "next/image";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import WidthContainer from "../WidthContainer";
import s from "./s.module.css";

type Props = {
	translation: TranslationObject;
	imagePath: any;
	imageBg: any;
	content: any;
};

export default function WeddingMain({
	translation,
	imagePath,
	imageBg,
	content,
}: Props) {
	const { subtitle, title, imageAlt, backgroundAlt, definitions, imgContent } =
		content;

	return (
		<section className={s.wedding_section}>
			<Image
				className={`${s.bannerImage} ${imgContent === "onTheBeach" && s["content_beach"]}`}
				src={imageBg}
				loading="lazy"
				placeholder="blur"
				alt={backgroundAlt}
			/>
			<div className={s.container}>
				<div className={s.section_wrapper}>
					<div className={s.content}>
						<h1 className={s.title}>
							<span className={s.subtitle}>{subtitle}</span>
							{title}
						</h1>
						<div className={s.content_definition}>
							{definitions.map((text: string, index: number) => (
								<p key={index}>{text}</p>
							))}
						</div>
					</div>
					<div className={s.img_wrapper}>
						<Image
							className={`${s.photo} ${imgContent === "onTheBeach" && s["content_beach"]}`}
							src={imagePath}
							loading="lazy"
							placeholder="blur"
							alt={imageAlt}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
