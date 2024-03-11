import Image, { StaticImageData } from "next/image";
import s from "./s.module.css";

type Props = {
  imagePath: StaticImageData;
  reversed?: boolean;
  alt: string;
};

export default function PhotoWithLine({imagePath, reversed, alt}: Props) {

  const lineClassName = reversed ? `${s.lineImage} ${s.lineImageReversed}`: s.lineImage;

  return (
    <div className={s.photo}>
      <div className={lineClassName}></div>

      <div className={s.imageContainer}>
        <Image
          src={imagePath}
          alt={alt}
          className={s.image}
          loading="lazy"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
