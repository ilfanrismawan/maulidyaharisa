import React from "react";
import AchievementSection from "./AchievementSection";
import SkillsSection from "./SkillsSection";

const SkillsetsSection = () => {
  return (
    <section className="flex flex-row">
      <AchievementSection />
      <SkillsSection />
    </section>
  );
};

export default SkillsetsSection;
