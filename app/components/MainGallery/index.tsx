// MainGallery
import { useState } from "react";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import WidthContainer from "../WidthContainer";
import GalleryItem from "../GalleryItem";
import Image, { StaticImageData } from "next/image";
import topLeft from "@/app/public/GaleriePhoto/nathan-dumlao-BOhDR9n4u2s-unsplash.jpg";
import topCenter from "@/app/public/GaleriePhoto/lauren-rader-Zlty1Qvi4ew-unsplash.jpg";
import topRight from "@/app/public/GaleriePhoto/nathan-dumlao-ZsPlbTxFosA-unsplash.jpg";
import center from "@/app/public/GaleriePhoto/carly-rae-hobbins-zNHOIzjJiyA-unsplash.jpg";
import bottomLeft from "@/app/public/GaleriePhoto/samantha-gades-7JUDLPlA114-unsplash.jpg";
import bottomCenter from "@/app/public/GaleriePhoto/alexandra-gornago-o2zFDffQnDM-unsplash.jpg";
import bottomRight from "@/app/public/GaleriePhoto/samantha-gades-odt2t81dZtQ-unsplash.jpg";
import s from "./MainGallery.module.css";
import GallerySwiper from "../GallerySwiper";

type Props = {
	translation: TranslationObject;
};

export default function MainGallery({ translation }: Props) {
	const gallery: { id: number; image: StaticImageData; alt: string }[] = [
		{
			id: 1,
			image: topLeft,
			alt: translation("views.homePage.gallery.alts.topLeft"),
		},
		{
			id: 2,
			image: topCenter,
			alt: translation("views.homePage.gallery.alts.topCenter"),
		},
		{
			id: 3,
			image: topRight,
			alt: translation("views.homePage.gallery.alts.topRight"),
		},
		{
			id: 4,
			image: center,
			alt: translation("views.homePage.gallery.alts.center"),
		},
		{
			id: 5,
			image: bottomLeft,
			alt: translation("views.homePage.gallery.alts.bottomLeft"),
		},
		{
			id: 6,
			image: bottomCenter,
			alt: translation("views.homePage.gallery.alts.bottomCenter"),
		},
		{
			id: 7,
			image: bottomRight,
			alt: translation("views.homePage.gallery.alts.bottomRight"),
		},
	];

	return (
		<section className={s.gallery}>
			<WidthContainer>
				<div className={s.gallery_wrapper}>
					<h2 className="title_main">
						{translation("views.homePage.gallery.title")}
					</h2>
					<ul className={s.gallery_list}>
						{gallery.map((item) => (
							<GalleryItem key={item.id} picture={item} />
						))}
					</ul>
					<div className={s.swiper_wrapper}>
						<GallerySwiper gallery={gallery} />
					</div>
				</div>
			</WidthContainer>
		</section>
	);
}
