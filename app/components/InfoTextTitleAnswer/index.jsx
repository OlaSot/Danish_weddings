import React from "react";
import s from "./s.module.css";
import Line from "../UI/Line";

export default function InfoTextTitleAnswer({
	title,
	answer,
	position = "left",
	...props
}) {
	let classPosition;
	switch (position) {
		case "left":
			classPosition = s.leftOrRight_Left;
			break;
		case "right":
			classPosition = s.leftOrRight_Right;
			break;
		default:
			classPosition = s.leftOrRight_Left;
	}

	props["className"] = [s.blockWrapper, classPosition].join(" ");

	return (
		<div {...props}>
			<div className="w-fit py-5">
				<span className={s.title}>{title}</span>
				<span className={[s.answer, "block py-4"].join(" ")}>{answer}</span>
				<Line />
			</div>
		</div>
	);
}
