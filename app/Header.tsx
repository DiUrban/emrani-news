import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
import Logo from "../public/Logo.png";
import Image from "next/image";
type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Link href={"https://emrani.co.uk"} prefetch={false}>
          <Image
            src={Logo}
            width={100}
            height={40}
            alt="Logo"
            className="cursor-pointer dark:text-primary-200"
          />
        </Link>
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl flex-1 text-center dark:text-primary-100">
            <span
              className="underline decoration-6
            decoration-primary-500 dark:text-primary-200 dark:decoration-primary-300"
            >
              Emrani
            </span>{" "}
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;
