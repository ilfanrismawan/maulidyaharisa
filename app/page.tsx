import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <div>Maulidya Harisa</div>
      <p>Achievement</p>
      <p>work experience</p>
      <p>education</p>
      <p>skills</p>
      <p id="kontak">contact</p>
    </main>
  );
}
