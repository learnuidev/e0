import { useTranslation } from "@/libs/i18n-next/use-translation";
import Link from "next/link";

export const AccountLink = () => {
  const { t } = useTranslation("common");

  return (
    <Link href="/accounts" className="text-sm">
      {t("account")}
    </Link>
  );
};
