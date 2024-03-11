import WidthContainer from "@/app/components/WidthContainer";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import Image from "next/image";
import rings from "@/app/public/images/achivements/rings.png";
import branch from "@/app/public/images/achivements/branch.png";
import s from "./Achievements.module.css";

type Props = {
	params: { locale: Locale };
};

export default async function Achievements({ params }: Props) {
	const translation = await getTranslation(params.locale);
	const achievements = [
		{
			title: translation(`views.achievements.item_1.title`),
			text_1: translation(`views.achievements.item_1.text_1`),
			text_2: translation(`views.achievements.item_1.text_2`),
			image: rings,
			alt: translation(`views.achievements.item_1.imgAlt`),
		},
		{
			title: translation(`views.achievements.item_2.title`),
			text_1: translation(`views.achievements.item_2.text_1`),
			text_2: translation(`views.achievements.item_2.text_2`),
			text_3: translation(`views.achievements.item_2.text_3`),
			image: branch,
			alt: translation(`views.achievements.item_2.imgAlt`),
		},
	];
	return (
		<section className={s.achievements}>
			<div className={s.line_1}></div>
			<div className={s.line_2}></div>
			<WidthContainer>
				<div className={s.content_wrapper}>
					<h1 className={`${s.title} title`}>
						{translation(`views.achievements.title`)}
					</h1>
					<ul className={s.achievements_list}>
						{achievements.map((item: any, index: number) => (
							<li key={index} className={s.achievements_item}>
								<h2 className="subtitle">{item.title}</h2>
								<div className={s.content_inner}>
									<div className={s.definishion}>
										<p>{item.text_1}</p>
										<p>{item.text_2}</p>
										<p>{item.text_3}</p>
									</div>
									<div className={s.img_wrapper}>
										<Image
											className={s.achievements_img}
											src={item.image}
											loading="lazy"
											placeholder="blur"
											alt={item.alt}
										/>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</WidthContainer>
		</section>
	);
}
