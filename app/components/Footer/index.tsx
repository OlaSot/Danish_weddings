// Footer.js
import React from "react";
import s from "./s.module.css";
import Image from "next/image";
import linkedinIcon from "../../public/images/icons/linkedin.png";
import youtubeIcon from "../../public/images/icons/youtube.png";
import facebookIcon from "../../public/images/icons/facebook.png";
import twitterIcon from "../../public/images/icons/twitter.png";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import WidthContainer from "../WidthContainer";
interface Props {
	translation: TranslationObject;
	currentLang: string;
}

export default function Footer({ translation, currentLang }: Props) {
	const icons = [
		{ linked_in: { title: "LinkedIn", image: linkedinIcon } },
		{ you_tube: { title: "YouTube", image: youtubeIcon } },
		{ facebook: { title: "Facebook", image: facebookIcon } },
		{ twitter: { title: "Twitter", image: twitterIcon } },
	];

	return (
		<div className={s.container}>
			<WidthContainer>
				<div className={s.content_wrapper}>
					<div className={s.leftContainer}>
						<h1 className={s.logo}>Dänemark Heiraten</h1>
						<div className={s.icons}>
							{icons.map((iconObj, index) => {
								const icon = Object.values(iconObj)[0];
								return (
									<Image
										key={index}
										className={s.icon}
										src={icon.image}
										loading="lazy"
										alt={icon.title}
									/>
								);
							})}
						</div>
					</div>
					<div className={s.rightContainer}>
						<p>FAQ</p>
						<p>TERMS & CONDITIONS</p>
						<p>SPONSORS</p>
						<p>PAYMENT INFO</p>
						<p>CONTACT US</p>
					</div>
				</div>
			</WidthContainer>
		</div>
	);
}
