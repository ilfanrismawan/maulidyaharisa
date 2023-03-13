import React from "react";
import { BsAward, BsTrophy } from "react-icons/bs";
import SkillsSection from "./SkillsSection";

const data = [
  "Memiliki brand fashion yang terkenal.",
  "Mendapatkan penghargaan dari lembaga fashion ternama.",
  "Mendesain pakaian untuk selebriti atau tokoh terkenal.",
  "Berpartisipasi dalam acara fashion week.",
  "Membuka toko pakaian sendiri atau bermitra dengan toko-toko terkenal.",
  "Membuat koleksi pakaian yang sukses di pasaran.",
  "Menjadi perancang busana resmi untuk event atau institusi tertentu.",
  "Melakukan kolaborasi dengan merek ternama atau institusi lainnya.",
  "Memiliki portofolio desain yang mengesankan.",
];

const mappedData = data.map((item, index) => {
  return (
    <li
      key={index}
      className="flex flex-row items-center justify-start gap-3 px-10"
    >
      <BsAward /> {item}
    </li>
  );
});

const AchievementSection = () => {
  return (
    <section className="items-end justify-end py-5">
      <h1 className="flex flex-row items-center justify-center gap-3 py-5 text-3xl font-black">
        Achievement
        <BsTrophy />
      </h1>
      <ul className="">{mappedData}</ul>
    </section>
  );
};

export default AchievementSection;
