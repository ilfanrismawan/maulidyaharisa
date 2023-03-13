import React from "react";
import { SlCheck, SlGraduation } from "react-icons/sl";

const data = [
  "Kreativitas.",
  "Kemampuan merancang.",
  "Pengetahuan tentang bahan.",
  "Kemampuan menjahit.",
  "Keahlian analisis tren.",
  "Kemampuan desain grafis.",
  "Kemampuan manajemen waktu.",
  "Kemampuan komunikasi.",
  "Kemampuan pemecahan masalah.",
  "Kemampuan menjalankan bisnis.",
];

const mappedData = data.map((item, index) => {
  return (
    <li
      key={index}
      className=" flex flex-row items-end justify-end gap-3 px-10"
    >
      {item}
      <SlCheck />
    </li>
  );
});

const SkillsSection = () => {
  return (
    <section className="w-[50%] py-5">
      <h1 className="flex flex-row items-center justify-center gap-3 py-5 text-3xl font-black">
        <SlGraduation />
        SkillSet
      </h1>
      <ul className="px-10">{mappedData}</ul>
    </section>
  );
};

export default SkillsSection;
