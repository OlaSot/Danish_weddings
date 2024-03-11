import "@/app/styles/globals.css";
import Header from "@/app/components/Header";
import { Locale, i18nConfig } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import { GeistSans } from "geist/font/sans";
import Chaport from "../components/Chaport"
import Footer from "../components/Footer";

export async function generateStaticParams() {
	return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}

type Props = {
	children: React.ReactNode;
	params: {
		locale: Locale;
	};
};

export default async function RootLayout({ children, params }: Props) {
	const translation = await getTranslation(params.locale);

	return (
		<html lang={params.locale} className={GeistSans.className}>
			<head>
				<title>{translation("meta.title")}</title>
				<meta name="description" content={translation("meta.description")} />
				<meta name="keywords" content={translation("meta.keywords")} />
				<link rel="icon" type="image/x-icon" href="favicon.ico"></link>
				<link rel="apple-touch-icon" href="favicon.ico" />
				<link rel="shortcut icon" href="favicon.ico" />
			</head>
			<body id="root">
				<Header translation={translation} currentLang={params.locale} />
				<main className="mt-16">{children}</main>
				<Footer translation={translation} currentLang={params.locale} />
				<Chaport />
			</body>
		</html>
	);
}
