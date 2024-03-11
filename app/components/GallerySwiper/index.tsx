// GallerySwiper
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import GalleryItem from "../GalleryItem";
import "swiper/css";
import s from "./GalleriSwiper.module.css";

type Props = {
	gallery: any;
};

export default function GallerySwiper({ gallery }: Props) {
	return (
		<Swiper
			//TODO: shows a piece of the next file?
			slidesPerView={1.05}
			loop={true}
			spaceBetween={20}
			mousewheel={true}
			zoom={true}
		>
			{gallery.map((item: any) => (
				<SwiperSlide key={item.id}>
					<GalleryItem picture={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
