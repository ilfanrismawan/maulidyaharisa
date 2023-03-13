import React from "react";
import AchievementSection from "./AchievementSection";
import SkillsSection from "./SkillsSection";

const SkillsetsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2">
      <AchievementSection />
      <SkillsSection />
    </section>
  );
};

export default SkillsetsSection;
