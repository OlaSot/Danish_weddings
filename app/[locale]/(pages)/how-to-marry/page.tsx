import React from "react";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import InfoTextTitleAnswer from "@/app/components/InfoTextTitleAnswer";
import MainText from "@/app/components/MainText";
import s from "./s.module.css";
import WidthContainer from "@/app/components/WidthContainer";

type Props = {
	params: { locale: Locale };
};

export default async function HowToMarry({ params }: Props) {
	const translation = await getTranslation(params.locale);
	const content = {
		questionsTitle: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.questionBlockTitle"
					),
				}}
			/>
		),
		title1: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryFirst.title"
					),
				}}
			/>
		),
		answer1: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryFirst.answer"
					),
				}}
			/>
		),
		title2: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarrySecond.title"
					),
				}}
			/>
		),
		answer2: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarrySecond.answer"
					),
				}}
			/>
		),
		title3: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryThird.title"
					),
				}}
			/>
		),
		answer3: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryThird.answer"
					),
				}}
			/>
		),
		title4: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryFourth.title"
					),
				}}
			/>
		),
		answer4: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryFourth.answer"
					),
				}}
			/>
		),
		title5: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryFifth.title"
					),
				}}
			/>
		),
		answer5: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryFifth.answer"
					),
				}}
			/>
		),
		title6: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarrySixth.title"
					),
				}}
			/>
		),
		answer6: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarrySixth.answer"
					),
				}}
			/>
		),
		title7: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarrySeventh.title"
					),
				}}
			/>
		),
		answer7: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarrySeventh.answer"
					),
				}}
			/>
		),
		title8: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryEighth.title"
					),
				}}
			/>
		),
		answer8: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryEighth.answer"
					),
				}}
			/>
		),
		title9: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryNinth.title"
					),
				}}
			/>
		),
		answer9: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryNinth.answer"
					),
				}}
			/>
		),
		conclusion: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.questionsBlock.howToMarryConclusion"
					),
				}}
			/>
		),

		documentsTitle: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.documentsBlock.documentBlockTitle"
					),
				}}
			/>
		),
		euTitle: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.documentsBlock.leftBlock.title"
					),
				}}
			/>
		),
		euContent: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.documentsBlock.leftBlock.content"
					),
				}}
			/>
		),
		noEuTitle: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.documentsBlock.rightBlock.title"
					),
				}}
			/>
		),
		noEuContent: (
			<section
				dangerouslySetInnerHTML={{
					__html: translation(
						"views.howToMarry.documentsBlock.rightBlock.content"
					),
				}}
			/>
		),
		additionalQuestionsBlock: (
			<section
			dangerouslySetInnerHTML={{
				__html: translation(
					"views.howToMarry.additionalQuestions"
				),
			}}
		/>
		)
	};

	return (
		<>
			<div className="px-8 py-8 max-w-[1280px] mx-auto">
				<MainText title={content.questionsTitle} />
				<InfoTextTitleAnswer
					title={content.title1}
					answer={content.answer1}
					position="left"
				/>
				<InfoTextTitleAnswer
					title={content.title2}
					answer={content.answer2}
					position="right"
				/>
				<InfoTextTitleAnswer
					title={content.title3}
					answer={content.answer3}
					position="left"
				/>
				<InfoTextTitleAnswer
					title={content.title4}
					answer={content.answer4}
					position="right"
				/>
				<InfoTextTitleAnswer
					title={content.title5}
					answer={content.answer5}
					position="left"
				/>
				<InfoTextTitleAnswer
					title={content.title6}
					answer={content.answer6}
					position="right"
				/>
				<InfoTextTitleAnswer
					title={content.title7}
					answer={content.answer7}
					position="left"
				/>
				<InfoTextTitleAnswer
					title={content.title8}
					answer={content.answer8}
					position="right"
				/>
				<InfoTextTitleAnswer
					title={content.title9}
					answer={content.answer9}
					position="left"
				/>
				<p>
					{content.conclusion}
				</p>
				<MainText title={content.documentsTitle} />
			</div>
			<div className={`${s.documentsBlock}`}>
				<div className="grid grid-cols-2 gap-3 max-w-[1280px] mx-auto py-8">
					<div className="leftBlock">
						<span className="block text-2xl font-bold text-center pb-2">
							{content.euTitle}
						</span>
						<div className={s.list}>{content.euContent}</div>
					</div>
					<div className="rightBlock">
						<span className="block text-2xl font-bold text-center pb-2">
							{content.noEuTitle}
						</span>
						<div className={s.list}>{content.noEuContent}</div>
					</div>
				</div>
			</div>
			<WidthContainer>
				<span className={s.additionalQuestionsBlock}>{content.additionalQuestionsBlock}</span>
			</WidthContainer>
		</>
	);
}
