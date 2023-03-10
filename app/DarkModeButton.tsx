"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {};

function DarkModeButton({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  } else {
    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
      <div>
        {currentTheme === "dark" ? (
          <SunIcon
            className="h-8 w-8 cursor-pointer text-yellow-500 "
            onClick={() => setTheme("light")}
          />
        ) : (
          <MoonIcon
            className="h-8 w-8 cursor-pointer text-slate-500 "
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    );
  }
}

export default DarkModeButton;
