import { Locale, i18nConfig } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import MainBanner from "../../components/MainBanner";
import SecondBlock from "@/app/components/SecondBlock";
import Line from "@/app/components/UI/Line";
import MainText from "@/app/components/MainText";
import ThirdBlock from "@/app/components/ThirdBlock";
import MainGallery from "@/app/components/MainGallery";
import MainAchievements from "@/app/components/MainAchievements";

export async function generateStaticParams() {
	return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}

type Props = {
	params: {
		locale: Locale;
	};
};
export default async function Page({ params }: Props) {
	const translation = await getTranslation(params.locale);

	return (
		<section>
			<MainBanner translation={translation} />
			<SecondBlock translation={translation} currentLang={params.locale} />
			<Line width={70} />
			<MainText title={translation("views.homePage.weddingInformation")} />
			<ThirdBlock translation={translation} currentLang={params.locale} />
			<MainGallery translation={translation} />
			<MainAchievements translation={translation} currentLang={params.locale} />
		</section>
	);
}
