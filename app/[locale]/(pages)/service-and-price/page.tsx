import PricesRules from "@/app/components/PricesRules";
import PricesServices from "@/app/components/PricesSerices";
import PricesStandarts from "@/app/components/PricesStandarts";
import PricesTable from "@/app/components/PricesTable";
import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";

type Props = {
	params: { locale: Locale };
};

export default async function ServiceAndPrice({ params }: Props) {
	const translation = await getTranslation(params.locale);
	return (
		<div>
			<PricesServices translation={translation} />
			<PricesStandarts translation={translation} />
			<PricesTable translation={translation} />
			<PricesRules translation={translation} />
		</div>
	);
}
