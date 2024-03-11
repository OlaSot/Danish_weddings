import Image, { StaticImageData } from "next/image";
import s from "./s.module.css";

type PolaroidPhotoProps = {
	src: StaticImageData;
	alt: string;
	className?: string;
};

export default function PolaroidPhoto({
	src,
	alt,
	className,
}: PolaroidPhotoProps) {
	const cardClass = [s.polaroidCard, className].filter(Boolean).join(" ");

	return (
		<div className={cardClass}>
			<Image
				className={s.polaroidPhoto}
				src={src}
				alt={alt}
				loading="lazy"
				placeholder="blur"
			/>
		</div>
	);
}
