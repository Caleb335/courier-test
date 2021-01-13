import React from "react";
import footStyle from "./scss/footer.module.scss";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`center ${footStyle.root}`}>
      <img src="/svgs/exalt-white.svg" />
      <p className={footStyle.desc}>
        Copyright &copy; {year} Exalt Logistics Limited. All rights reserved.
      </p>
      <div className={`center ${footStyle.btnGrid}`}>
        <img
          src="/svgs/apple-white.svg"
          className="app-store"
          alt="download on the app store"
        />
        <img
          src="/svgs/google-white.svg"
          className="play-store"
          alt="download on the android playStore"
        />
      </div>
      <div className={footStyle.socials}>
        <SiFacebook />
        <GrTwitter />
        <AiOutlineInstagram />
      </div>
    </footer>
  );
};

export default Footer;
