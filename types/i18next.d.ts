import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import accounts from "@/locales/en/accounts.json";
import banner from "@/locales/en/banner.json";
import common from "@/locales/en/common.json";
import inbox from "@/locales/en/inbox.json";
import myelin from "@/locales/en/myelin.json";
import navigator from "@/locales/en/navigator.json";
import search from "@/locales/en/search.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      accounts: typeof accounts;
      banner: typeof banner;
      common: typeof common;
      inbox: typeof inbox;
      myelin: typeof myelin;
      navigator: typeof navigator;
      search: typeof search;
    };
  }
}

