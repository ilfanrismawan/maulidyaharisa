"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AchievementSection from "./components/AchievementSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import SkillsetsSection from "./components/SkillsetsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsetsSection />
      <WorkExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
