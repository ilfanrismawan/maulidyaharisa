"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Tentang",
    page: "tentang",
  },
  {
    label: "Kontak",
    page: "kontak",
  },
];

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="fixed flex w-full flex-row items-center justify-between px-9 py-6 backdrop-blur-lg">
      <div
        className={`pl-12 font-bold ${satisfy.className} cursor-pointer items-center justify-center text-lg`}
      >
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <h1 className="text-2xl">Maulidya Harisa</h1>
        </Link>
      </div>
      <div className="flex cursor-pointer flex-row items-center justify-center gap-5 pr-32">
        {NAV_ITEMS.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.page}
              className="block rounded-full font-semibold hover:text-zinc-500 active:text-zinc-900 lg:inline-block"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(!navbar)}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
