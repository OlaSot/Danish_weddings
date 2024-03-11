// MainBanner.jsx
import React from "react";
import Image from "next/image";
import PolaroidPhoto from "../PolaroidPhoto";
import s from "./s.module.css";
import bannerImage from "@/app/public/images/heiraten_main.jpeg";
import weddingPhoto1 from "@/app/public/images/weddingPhoto1.png";
import weddingPhoto2 from "@/app/public/images/weddingPhoto2.png";
import weddingPhoto3 from "@/app/public/images/weddingPhoto3.png";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import WidthContainer from "../WidthContainer";
import { MotionDiv } from "../MotionDiv";

type Props = {
	translation: TranslationObject;
};

const variantsP1 = {
	hidden: {opacity:0, x:140, y:150, rotate:-30},
	visible: {opacity:1, x:160, y:150, rotate:-26}
}
const variantsP2 = {
	hidden: {opacity:0, x:100, y:160, rotate:19},
	visible: {opacity:1, x:0, y:120, rotate:4}
}
const variantsP3 = {
	hidden: {opacity:0, x:60, y:240, rotate:52},
	visible: {opacity:1, x:-160, y:160, rotate:34}
}

export default function MainBanner({ translation }: Props) {
	return (
		<div className={s.blockWrapper}>
			<Image
				className={s.bannerImage}
				src={bannerImage}
				loading="lazy"
				placeholder="blur"
				alt={translation("meta.title")}
			/>
			<WidthContainer className={s.contentSloganAndCards}>
				<h1 className={s.slogan}>{translation("views.homePage.slogan")}</h1>
				<div className={s.threeImg}>
					<MotionDiv 
					variants={variantsP1} 
					initial="hidden" 
					animate="visible" 
					transition={{
						delay:0,
						ease:"linear",
						duration: 0.5
					}}
					viewport={{amount:0}}
					>
						<PolaroidPhoto
							src={weddingPhoto1}
							alt={translation("meta.title")}
							className={s.polaroidPhoto1}
						/>
					</MotionDiv>

					<MotionDiv 
					variants={variantsP2} 
					initial="hidden" 
					animate="visible" 
					transition={{
						delay:0.1,
						ease:"linear",
						duration: 0.3
					}}
					viewport={{amount:0}}
					>
						<PolaroidPhoto
							src={weddingPhoto2}
							alt={translation("meta.title")}
							className={s.polaroidPhoto2}
							/>
					</MotionDiv>


					<MotionDiv 
					variants={variantsP3} 
					initial="hidden" 
					animate="visible" 
					transition={{
						delay:0.2,
						ease:"linear",
						duration: 0.5
					}}
					viewport={{amount:0}}
					>
						<PolaroidPhoto
							src={weddingPhoto3}
							alt={translation("meta.title")}
							className={s.polaroidPhoto3}
						/>
					</MotionDiv>
				</div>
			</WidthContainer>
		</div>
	);
}
