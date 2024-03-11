import WidthContainer from "@/app/components/WidthContainer";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import s from "./s.module.css";

type Props = {
	params: { locale: Locale };
};

export default async function MarriageLaw({ params }: Props) {
	const translation = await getTranslation(params.locale);
	const rules = [
		{
			title: (
				<h2
					dangerouslySetInnerHTML={{
						__html: translation(`views.marriageLaw.rule_1.title`),
					}}
				/>
			),
			definition: (
				<ul
					className={s.definition_list}
					dangerouslySetInnerHTML={{
						__html: translation(`views.marriageLaw.rule_1.definition`),
					}}
				/>
			),
		},
		{
			title: (
				<h2
					dangerouslySetInnerHTML={{
						__html: translation(`views.marriageLaw.rule_2.title`),
					}}
				/>
			),
			definition: (
				<ul
					className={s.definition_list}
					dangerouslySetInnerHTML={{
						__html: translation(`views.marriageLaw.rule_2.definition`),
					}}
				/>
			),
		},
		{
			title: (
				<h2
					dangerouslySetInnerHTML={{
						__html: translation(`views.marriageLaw.rule_3.title`),
					}}
				/>
			),
			definition: (
				<ul
					className={s.definition_list}
					dangerouslySetInnerHTML={{
						__html: translation(`views.marriageLaw.rule_3.definition`),
					}}
				/>
			),
		},
		{
			title: (
				<h2
					dangerouslySetInnerHTML={{
						__html: translation(`views.marriageLaw.rule_4.title`),
					}}
				/>
			),
			definition: (
				<ul
					className={s.definition_list}
					dangerouslySetInnerHTML={{
						__html: translation(`views.marriageLaw.rule_4.definition`),
					}}
				/>
			),
		},
	];
	return (
		<section className={s.law_page}>
			<div className={s.line_1}></div>
			<div className={s.line_2}></div>
			<div className={s.line_3}></div>
			<WidthContainer>
				<div className={s.content}>
					<h1 className={`${s.title} title`}>
						{translation(`views.marriageLaw.title`)}
					</h1>
					<ul className={s.rules_list}>
						{rules.map((item: any, index: number) => (
							<li key={index} className={s.rules_item}>
								{item.title}
								{item.definition}
							</li>
						))}
					</ul>
				</div>
			</WidthContainer>
		</section>
	);
}
