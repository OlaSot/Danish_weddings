import ContactsAddress from "@/app/components/ContactsAddress";
import ContactsBanner from "@/app/components/ContactsBanner";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";

type Props = {
	params: { locale: Locale };
};

export default async function contact({ params }: Props) {
	const translation = await getTranslation(params.locale);

	return (
		<div>
			<ContactsBanner translation={translation} />
			<ContactsAddress translation={translation} />
		</div>
	);
}
