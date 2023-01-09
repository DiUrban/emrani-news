"use client";
import { categories } from "../constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
type Props = {};

function NavLinks({}: Props) {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm lg:text-base gap-4 pb-10 max-w-6xl border-b mx-auto dark:text-primary-100">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
