import Link from "next/link";
import s from "./index.module.css";
import Image from "next/image";

export default function PhotoService({ imagePath, altD, link }) {
	return (
		<div className={s.photoWrapper}>
			<Link href={link.path} className={s.serviceDescr}>
				<p>{link.title}</p>
				<Image
					className={s.servicePhoto}
					src={imagePath}
					loading="lazy"
					placeholder="blur"
					alt={altD}
				/>
			</Link>
		</div>
	);
}
