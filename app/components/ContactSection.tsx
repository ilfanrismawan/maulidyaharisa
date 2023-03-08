import React from "react";

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const ContactSection = () => {
  return (
    <section id="kontak">
      <div className="flex w-full flex-row items-center justify-center">
        <AiOutlineGithub size={50} />
        <AiOutlineTwitter size={50} />
        <AiOutlineLinkedin size={50} />
        <AiOutlineYoutube size={50} />
        <AiOutlineWhatsApp size={50} />
      </div>
    </section>
  );
};

export default ContactSection;
