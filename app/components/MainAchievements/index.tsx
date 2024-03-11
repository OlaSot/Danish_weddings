import Image from "next/image";
import { generateLinks } from "@/app/commonLinks";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import wreath from "@/app/public/images/achivements/wreath.png";
import WidthContainer from "../WidthContainer";
import s from "./MainAchievements.module.css";
import Link from "next/link";

type Props = {
	translation: TranslationObject;
	currentLang: string;
};

export default function MainAchievements({ translation, currentLang }: Props) {
	const { readMoreAchievementsLink } = generateLinks({
		translation,
		currentLang,
	});
	return (
		<section className={s.achievements}>
			<WidthContainer>
				<div className={s.achievements_wrapper}>
					<Image
						className={s.achievements_img}
						src={wreath}
						loading="lazy"
						placeholder="blur"
						alt={translation("views.homePage.altAchievement")}
					/>
					<h2 className="title_main">
						{translation("views.homePage.achievementsTitle")}
					</h2>
					<div className={s.conten_wrapper}>
						<p className={s.content}>
							{translation("views.homePage.achievementsText")}
							<Link href={readMoreAchievementsLink.path}>
								{readMoreAchievementsLink.title}
							</Link>
						</p>
					</div>
				</div>
			</WidthContainer>
		</section>
	);
}
