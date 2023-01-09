import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer dark:text-primary-200" />
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
          <button className="hidden md:inline bg-primary-300 text-primary-200 px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-primary-900">
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;
