// GalleryItem
"use client";
import Image, { StaticImageData } from "next/image";
import s from "./GalleryItem.module.css";
import { useState } from "react";
import Modal from "../Modal";

type GalleryElement = {
	id: number;
	image: StaticImageData;
	alt: string;
};

type Props = {
	picture: GalleryElement;
};

export default function GalleryItem({ picture }: Props) {
	const { id, image, alt } = picture;
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openModal = () => {
		if (window.innerWidth > 1024) setIsOpen(!isOpen);
	};

	return (
		<div className={s.gallery_item}>
			<div onClick={() => openModal()} className={s.item_wrapper}>
				<Image
					className={s.gallery_image}
					src={image}
					loading="lazy"
					placeholder="blur"
					alt={alt}
				/>
			</div>
			<Modal isOpen={isOpen} image={image} alt={alt} toggleModal={openModal} />
		</div>
	);
}
