"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

import WorkExperienceSection from "./components/WorkExperienceSection";

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
