import React from "react";
async function getData() {
  const url = `https://graph.instagram.com/${process.env.user_id}?fields=id,username&access_token=${process.env.INSTAGRAM_API}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const WorkExperienceSection = () => {
  // const data = await getData()

  return <div>WorkExperienceSection</div>;
};

export default WorkExperienceSection;
