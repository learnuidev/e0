import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import banner from "@/locales/en/banner.json";
import common from "@/locales/en/common.json";
import inbox from "@/locales/en/inbox.json";
import navigator from "@/locales/en/navigator.json";
import search from "@/locales/en/search.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      banner: typeof banner;
      common: typeof common;
      inbox: typeof inbox;
      navigator: typeof navigator;
      search: typeof search;
    };
  }
}

