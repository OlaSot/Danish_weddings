//WeddingInDenmark
import WeddingMain from "@/app/components/WeddingMain";
import WeddingStages from "@/app/components/WeddingStages";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import denmarkImage from "@/app/public/images/services/denmark.jpg";
import denmarkBg from "@/app/public/images/services/denmark_bg.jpg";

type Props = {
	params: { locale: Locale };
};

export default async function WeddingInDenmark({ params }: Props) {
	const translation = await getTranslation(params.locale);
	const servicePaket = "denmarkServicepaket";

	const content = {
		subtitle: translation(`views.${servicePaket}.subtitle`),
		title: translation(`views.${servicePaket}.title`),
		imageAlt: translation(`views.${servicePaket}.mainImageAlt`),
		backgroundAlt: translation(`views.${servicePaket}.backgroundAlt`),
		definitions: [
			translation(`views.${servicePaket}.paketDefinitions.definition_1`),
			translation(`views.${servicePaket}.paketDefinitions.definition_2`),
		],
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
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_1.stageItem_1`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_1.stageItem_2`
							),
						}}
					/>,
				],
			},
			{
				id: 2,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_2.stageTitle`
				),
				items: [
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_2.stageItem_1`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_2.stageItem_2`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_2.stageItem_3`
							),
						}}
					/>,
				],
			},
			{
				id: 3,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_3.stageTitle`
				),
				items: [
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_3.stageItem_1`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_3.stageItem_2`
							),
						}}
					/>,
				],
			},
			{
				id: 4,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_4.stageTitle`
				),
				items: [
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_4.stageItem_1`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_4.stageItem_2`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_4.stageItem_3`
							),
						}}
					/>,
				],
			},
			{
				id: 5,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_5.stageTitle`
				),
				items: [
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_5.stageItem_1`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_5.stageItem_2`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_5.stageItem_3`
							),
						}}
					/>,
				],
			},
			{
				id: 6,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_6.stageTitle`
				),
				items: [
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_6.stageItem_1`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_6.stageItem_2`
							),
						}}
					/>,
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
			{
				id: 8,
				stageTitle: translation(
					`views.${servicePaket}.stages.stage_8.stageTitle`
				),
				items: [
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_8.stageItem_1`
							),
						}}
					/>,
					<li
						dangerouslySetInnerHTML={{
							__html: translation(
								`views.${servicePaket}.stages.stage_8.stageItem_2`
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
				imagePath={denmarkImage}
				imageBg={denmarkBg}
				content={content}
			/>
			<WeddingStages translation={translation} stageContent={stageContent} />
		</div>
	);
}
