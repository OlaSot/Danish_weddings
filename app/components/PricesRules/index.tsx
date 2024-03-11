//PricesRules
import React, { useState } from "react";
import WidthContainer from "../WidthContainer";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import s from "./s.module.css";

type Props = {
	translation: TranslationObject;
};

export default function PricesRules({ translation }: Props) {
	const rules: any[] = [
		<section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.serviceRule_1")}} />,
		<section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.serviceRule_2")}} />,
	];

	const series: String = translation("views.serviceAndPrice.quicklySerise_1");

	return (
		<WidthContainer>
			<section className={s.rules_section}>
				<h4 className={s.rules_title}>
					{translation("views.serviceAndPrice.serviceRuleTitle")}
				</h4>
				{rules.map((rule, index) => (
					<p key={index}>{rule}</p>
				))}
				<div>
					<p className={s.rules_title}><section dangerouslySetInnerHTML={{__html: translation("views.serviceAndPrice.quicklySerisesTitle")}} /></p>
					<p>{series}</p>					
				</div>
			</section>
		</WidthContainer>
	);
}
