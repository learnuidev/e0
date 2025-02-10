"use client";

import { ToggleTheme } from "@/components/toggle-theme";
import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";

import { Navigator } from "./navigator";
import { NavbarContainer } from "./navbar/navbar-container";

import { SearchBar } from "./navbar/search-bar";
import { AccountLink } from "./account-link";

export function Navbar() {
  return (
    <NavbarContainer>
      <SearchBar />

      <Navigator />

      <div className="flex justify-end space-x-2 items-center">
        <ToggleTheme />
        <LanguageSwitcher />
        <AccountLink />
      </div>
    </NavbarContainer>
  );
}
