//PricesTable
import WidthContainer from "../WidthContainer";
import { TranslationObject } from "@/lib/i18n/loadTranslation";
import s from "./s.module.css";

type Props = {
	translation: TranslationObject;
};

export default function PricesTable({ translation }: Props) {
	const services = [
		{
			id: 1,
			service: translation("views.serviceAndPrice.serviceName_1"),
			price: translation("views.serviceAndPrice.servicePrice_1"),
		},
		{
			id: 2,
			service: translation("views.serviceAndPrice.serviceName_2"),
			price: translation("views.serviceAndPrice.servicePrice_2"),
		},
		{
			id: 3,
			service: translation("views.serviceAndPrice.serviceName_3"),
			price: translation("views.serviceAndPrice.servicePrice_3"),
		},
		{
			id: 4,
			service: translation("views.serviceAndPrice.serviceName_4"),
			price: translation("views.serviceAndPrice.servicePrice_4"),
		},
		{
			id: 5,
			service: translation("views.serviceAndPrice.serviceName_5"),
			price: translation("views.serviceAndPrice.servicePrice_5"),
		},
		{
			id: 6,
			service: translation("views.serviceAndPrice.serviceName_6"),
			price: translation("views.serviceAndPrice.servicePrice_6"),
		},
	];
	return (
		<WidthContainer>
			<section className={s.price_table}>
				<h2 className={s.table_title}>
					{translation("views.serviceAndPrice.tableTitle")}
				</h2>
				<ul className={s.services_list}>
					{services.map((service) => (
						<li key={service.id} className={s.service_name}>
							<p>{service.service}</p>
							<p>
								{service.price}
								<span>&#8364;</span>
							</p>
						</li>
					))}
				</ul>
			</section>
		</WidthContainer>
	);
}
