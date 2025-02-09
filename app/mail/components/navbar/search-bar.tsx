import { useTranslation } from "@/libs/i18n-next/use-translation";
import { SearchIcon } from "lucide-react";

export const SearchBar = () => {
  const { t } = useTranslation("search");
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className="focus-visible:ring-0 w-full py-2 pr-4 pl-10 dark:text-gray-300rtext-gray-700 border border-none rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        placeholder={t("ask.me.anything")}
      />
      <button
        type="submit"
        className="absolute left-2 p-2 text-gray-600 hover:text-pink-500 focus:outline-none"
      >
        <SearchIcon size={20} />
      </button>
    </div>
  );
};
