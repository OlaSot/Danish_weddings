import React from "react";
import WidthContainer from "../WidthContainer";
import s from "./s.module.css";

type Props = {
	title: string | any;
};

export default function MainText({ title }: Props) {
	return (
		<WidthContainer>
			<h2 className={`${s.mainText} title_main`}>{title}</h2>
		</WidthContainer>
	);
}
