"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import React from "react";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

const poppins = Poppins({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const HeroSection = () => {
  return (
    <section id="home" className="h-full w-full py-24">
      <div className="flex w-full flex-row pt-10">
        <div className="flex w-full flex-col items-start justify-center pl-32">
          <div>
            <p className="text-xl">Halo! saya</p>
          </div>
          <div>
            <h1 className={`${poppins.className} text-7xl font-black`}>
              MAULIDYA HARISA
            </h1>
            <h2 className="-mt-2 text-2xl">
              saya seorang <span className="font-bold">Fashion Designer</span>
            </h2>
          </div>
          <div className="flex flex-row items-start justify-start gap-3 text-center">
            <Link
              to="kontak"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="mt-7 rounded-full bg-[#FFE3E1] py-3 px-8 font-semibold text-[#FF9494] hover:bg-[#FF9494]/60 hover:text-white  active:bg-[#FF9494] active:text-white/60">
                Hubungi Saya
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-2/3 flex-col items-center justify-center pr-28">
          <Image
            src="/about.png"
            alt="Maulidya Harisa"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="mr-52 flex flex-row justify-center gap-3 pb-36 pt-14">
        <p className="mr-4">Klik Untuk Mengetahui Lebih Lanjut Tentang Saya</p>
        <Link
          to="tentang"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
