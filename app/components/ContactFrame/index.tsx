"use client";
// ContactFrame
import s from "./s.module.css";

export default function ContactFrame() {
	return (
		<section className={s.map}>
			<iframe
				width="100%"
				height="300"
				src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Hammersberg%2032%2066280%20Sulzbach+(Heiraten%20in%20D%C3%A4nemark)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
			></iframe>
		</section>
	);
}
