import WeddingMain from "@/app/components/WeddingMain";
import WeddingStages from "@/app/components/WeddingStages";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import onTheBeachImage from "@/app/public/images/services/onTheBeach.jpg";
import onTheBeachBg from "@/app/public/images/services/beach_bg.jpg";

type Props = {
	params: { locale: Locale };
};

export default async function WeddingOnTheBeach({ params }: Props) {
	const translation = await getTranslation(params.locale);
	const servicePaket = "onTheBeachServicepaket";
	const content = {
		subtitle: translation(`views.${servicePaket}.subtitle`),
		title: translation(`views.${servicePaket}.title`),
		imageAlt: translation(`views.${servicePaket}.mainImageAlt`),
		backgroundAlt: translation(`views.${servicePaket}.backgroundAlt`),
		definitions: [
			translation(`views.${servicePaket}.paketDefinitions.definition_1`),
		],
		imgContent: "onTheBeach",
	};

	const stageContent = {
		weddingStagesTitle: translation(`views.${servicePaket}.stagesTitle`),
		callback: (
			<p
				dangerouslySetInnerHTML={{
					__html: translation(`views.${servicePaket}.callbackSlogan`),
				}}
			/>
		),
		stages: [
			{
				id: 1,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_1.stageTitle`
				),
				items: [
					translation(`views.${servicePaket}.stages.stage_1.stageItem_1`),
				],
			},
			{
				id: 2,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_2.stageTitle`
				),
				items: [
					translation(`views.${servicePaket}.stages.stage_2.stageItem_1`),
				],
			},
			{
				id: 3,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_3.stageTitle`
				),
				items: [
					translation(`views.${servicePaket}.stages.stage_3.stageItem_1`),
				],
			},
			{
				id: 4,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_4.stageTitle`
				),
				items: [
					translation(`views.${servicePaket}.stages.stage_4.stageItem_1`),
				],
			},
			{
				id: 5,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_5.stageTitle`
				),
				items: [
					translation(`views.${servicePaket}.stages.stage_5.stageItem_1`),
				],
			},
			{
				id: 6,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_6.stageTitle`
				),
				items: [
					translation(`views.${servicePaket}.stages.stage_6.stageItem_1`),
				],
			},
			{
				id: 7,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_7.stageTitle`
				),
				items: [
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_7.stageItem_1`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_7.stageItem_2`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_7.stageItem_3`
							),
						}}
					/>,
				],
			},
		],
	};

	return (
		<div>
			<WeddingMain
				translation={translation}
				imagePath={onTheBeachImage}
				imageBg={onTheBeachBg}
				content={content}
			/>
			<WeddingStages translation={translation} stageContent={stageContent} />
		</div>
	);
}
