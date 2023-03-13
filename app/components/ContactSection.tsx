import React from "react";

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
  AiOutlineCopyright,
} from "react-icons/ai";

const ContactSection = () => {
  const date = new Date().getFullYear();
  return (
    <section id="kontak">
      <div className="flex w-full flex-row items-center justify-center ">
        <AiOutlineGithub
          size={50}
          className="hover:brightness-90 active:brightness-75"
        />
        <AiOutlineTwitter
          size={50}
          className="hover:brightness-90 active:brightness-75"
        />
        <AiOutlineLinkedin
          size={50}
          className="hover:brightness-90 active:brightness-75"
        />
        <AiOutlineYoutube
          size={50}
          className="hover:brightness-90 active:brightness-75"
        />
        <AiOutlineWhatsApp
          size={50}
          className="hover:brightness-90 active:brightness-75"
        />
      </div>
      <p className="flex flex-row items-center justify-center gap-2 text-center">
        Copyright
        <AiOutlineCopyright className="font-black brightness-90" />
        {date}
      </p>
    </section>
  );
};

export default ContactSection;
