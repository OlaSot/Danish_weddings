import React from "react";
import s from "./s.module.css";
import Link from "next/link";

type Props = {
	title: string;
	description: string;
	reversed?: boolean;
	learnMoreLink?: {
		title: string;
		path: string;
	};
};

export default function PhotoWithLineDescr({
	title,
	description,
	reversed,
	learnMoreLink,
}: Props) {
	const textClassName = reversed
		? `${s.container} ${s.containerReversed}`
		: s.container;
	const descr = <p dangerouslySetInnerHTML={{ __html: description }} />;
	return (
		<div className={textClassName}>
			<h3 className="subtitle">{title}</h3>
			<div className={s.description}>
				{descr}
				{learnMoreLink && (
					<Link href={learnMoreLink.path}>{learnMoreLink.title}</Link>
				)}
			</div>
		</div>
	);
}
