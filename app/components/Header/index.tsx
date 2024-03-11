import { TranslationObject } from "@/lib/i18n/loadTranslation";
import { generateNavLinks } from "@/app/linksNav";
import HeaderLogo from "../HeaderLogo";
import s from "./s.module.css";
import HeaderMenuWrapper from "../HeaderMenuWrapper";

interface Props {
	translation: TranslationObject;
	currentLang: string;
}

export default function Header({ translation, currentLang }: Props) {
	const links = generateNavLinks({ translation, currentLang });

	return (
		<div className={s.header_wrapper}>
			<div className={s.container}>
				<nav className="flex h-16 w-full items-center justify-between border-b border-b-neutral-200 bg-white px-8">
					<HeaderLogo mainLink={links[0]} />
					<HeaderMenuWrapper
						message={translation("nav.locale-selector.message")}
						currentLang={currentLang}
						links={links}
					/>
				</nav>
			</div>
		</div>
	);
}
