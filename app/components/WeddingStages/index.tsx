// WeddingStages
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import WidthContainer from "../WidthContainer";
import s from "./s.module.css";

type Props = {
	translation: TranslationObject;
	stageContent: any;
};

export default function WeddingStages({ translation, stageContent }: Props) {
	const { weddingStagesTitle, stages, callback } = stageContent;

	return (
		<section className={s.section_stages}>
			<WidthContainer>
				<div className={s.wrapper}>
					<h2 className={s.section_title}>{weddingStagesTitle}</h2>

					<ul className={s.stages}>
						{stages.map((stage: any) => (
							<li key={stage.id} className={s.stage}>
								<div className={s.stage_wrapper}>
									<p className={s.stage_id}>{stage.id}</p>
									<div className={s.stage_inner}>
										<h3 className={s.stage_title}>{stage.stageTitle}</h3>
										<ul className={s.stage_items}>
											{stage.items.map((item: string, index: number) => (
												<div key={index} className={s.item}>
													{item}
												</div>
											))}
										</ul>
									</div>
								</div>
							</li>
						))}
					</ul>

					<div className={s.callback}>{callback}</div>
				</div>
			</WidthContainer>
		</section>
	);
}
