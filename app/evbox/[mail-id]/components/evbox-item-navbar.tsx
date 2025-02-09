"use client";

import { ToggleTheme } from "@/components/toggle-theme";
import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";
import { Navigator } from "../../components/navigator";
import Link from "next/link";
import { SearchBar } from "../../components/navbar/search-bar";
import { NavbarContainer } from "../../components/navbar/navbar-container";
import { ArrowLeft } from "lucide-react";

export function EvboxItemNavbar() {
  return (
    <NavbarContainer>
      {/* Left Logo */}
      <div className="flex space-x-4 items-center">
        <Link href="/evbox">
          <ArrowLeft />{" "}
        </Link>

        <div className="w-full">
          <SearchBar />
        </div>
      </div>

      <Navigator />

      <div className="flex justify-end space-x-2 items-center">
        <ToggleTheme />
        <LanguageSwitcher />
        <div className="flex justify-end">Account</div>
      </div>
    </NavbarContainer>
  );
}
