"use client";
//Modal
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import s from "./Modal.module.css";
import Image, { StaticImageData } from "next/image";

type Props = {
	isOpen: boolean;
	image: StaticImageData;
	alt: string;
	toggleModal: () => void;
};

export default function Modal({ isOpen, image, alt, toggleModal }: Props) {
	return (
		<div
			className={`${s.popup} ${isOpen ? s.active : ""}`}
			onClick={toggleModal}
		>
			<span>
				<Image
					src={image}
					className={s.popup_image}
					loading="lazy"
					placeholder="blur"
					alt={alt}
				/>
			</span>
		</div>
	);
}
