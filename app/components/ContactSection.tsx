import React from "react";

import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
  AiOutlineCopyright,
  AiOutlineInstagram,
} from "react-icons/ai";
import InputForm from "./InputForm";

const ContactSection = () => {
  const date = new Date().getFullYear();
  return (
    <section id="kontak">
      <InputForm />
      <div className="flex w-full flex-row items-center justify-center ">
        <AiOutlineInstagram
          size={50}
          className="hover:brightness-90 active:brightness-75"
        />
        <AiOutlineTwitter
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
        <AiOutlineLinkedin
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
