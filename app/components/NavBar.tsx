"use client";
import React, { Fragment, useState } from "react";
import { Link } from "react-scroll/modules";
import { Satisfy } from "next/font/google";
import { Menu, Transition } from "@headlessui/react";
import { IoMdMenu, IoMdClose, IoMdInformation } from "react-icons/io";
import { GrAchievement } from "react-icons/gr";

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
    <nav className="sticky top-0 flex w-full flex-row items-center justify-between py-3 px-5 backdrop-blur-lg sm:px-9 sm:py-6">
      <div
        className={`pl-2 font-bold sm:pl-12 ${satisfy.className} cursor-pointer items-center justify-center text-lg`}
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
      <div className="block pr-3 sm:hidden">
        <Menu as="div" className="backdrop-blur-lg">
          <div className="pr-8">
            <Menu.Button className="gray fill-gray-800">
              {/* Menu Icon */}
              <IoMdMenu
                className="hover:brightness-95 active:brightness-75"
                size={25}
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#FFF5E4]/95 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-xl focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#FF9494] text-white" : "text-[#FF9494]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <IoMdInformation
                          size={30}
                          className="mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <IoMdInformation
                          size={30}
                          className="mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Tentang
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#FF9494] text-white" : "text-[#FF9494]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <IoMdClose
                          size={30}
                          className="mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <IoMdClose
                          size={30}
                          className="mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Portofolio
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#FF9494] text-white" : "text-[#FF9494]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <IoMdClose
                          size={25}
                          className="mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <IoMdClose
                          size={25}
                          className="mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Project
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#FF9494] text-white" : "text-[#FF9494]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <GrAchievement
                          size={20}
                          className="mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <GrAchievement
                          size={20}
                          className="mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Achievement
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#FF9494] text-white" : "text-[#FF9494]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <IoMdClose
                          className="mr-2 h-5 w-5 text-[#FF9494]"
                          aria-hidden="true"
                        />
                      ) : (
                        <IoMdClose
                          className="mr-2 h-5 w-5 text-[#FF9494]"
                          aria-hidden="true"
                        />
                      )}
                      Kontak
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="hidden cursor-pointer flex-row items-center justify-center gap-5 pr-32 sm:flex">
        {NAV_ITEMS.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.page}
              className="block rounded-full font-semibold hover:brightness-95 active:brightness-75 lg:inline-block"
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
