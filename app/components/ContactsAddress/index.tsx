// ContactsAddress
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import WidthContainer from "../WidthContainer";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { PiEnvelopeSimple } from "react-icons/pi";
import { PiPhoneCall } from "react-icons/pi";
import { LiaFaxSolid } from "react-icons/lia";
import adminOne from "@/app/public/images/contacts/call_1.jpg";
import adminTwo from "@/app/public/images/contacts/call_2.jpg";

import s from "./s.module.css";
import ContactFrame from "../ContactFrame";

type Props = {
	translation: TranslationObject;
};

export default function ContactsAddress({ translation }: Props) {
	const title = translation("views.contacts.title");
	const subtitle = translation("views.contacts.subtitle");
	const altPhoto = translation("views.contacts.altPhoto");

	const contacts = [
		{
			img: <SlLocationPin />,
			contact: (<p dangerouslySetInnerHTML={{__html: translation("views.contacts.street")}} />),
		},
		{
			img: <PiEnvelopeSimple />,
			contact: (<p dangerouslySetInnerHTML={{__html: translation("views.contacts.email")}} />),
		},
		{
			img: <PiPhoneCall />,
			contact: translation("views.contacts.phone"),
			canCall: true
		},
		{
			img: <PiPhoneCall />,
			contact: translation("views.contacts.phone_2"),
			canCall: true
		},
		{
			img: <LiaFaxSolid />,
			contact: translation("views.contacts.fax"),
			canCall: true
		},
	];

	return (
		<section className={s.address}>
			<WidthContainer>
				<div className={s.content_wrapper}>
					<div className={s.content}>
						<div>
							<h1 className={s.title}>{title}</h1>
							<p className={s.subtitle}>{subtitle}</p>
						</div>
						<ul className={s.contact_list}>
							{contacts.map((contact, index) => (
								<li key={index} className={s.contact_item}>
									{contact.img && <span className={s.icon}>{contact.img}</span>}
									<div>{contact.canCall ? <a href={`tel:+${contact.contact}`}>{contact.contact}</a> : contact.contact}</div>
								</li>
							))}
						</ul>
					</div>

					<div className={s.location}>
						<div className={s.admin_photos}>
							<div className={s.photo_wrapper}>
								<Image
									className={s.adminImage}
									src={adminOne}
									loading="lazy"
									placeholder="blur"
									alt={altPhoto}
								/>
							</div>
							<div className={s.photo_wrapper}>
								<Image
									className={s.contactImage}
									src={adminTwo}
									loading="lazy"
									placeholder="blur"
									alt={altPhoto}
								/>
							</div>
						</div>
						<ContactFrame />
					</div>
				</div>
			</WidthContainer>
		</section>
	);
}
