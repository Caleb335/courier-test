import React from "react";
import footStyle from "./scss/footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`center ${footStyle.root}`}>
      <img src="/svgs/exalt-white.svg" />
      <p className={footStyle.desc}>
        copyright &copy; {year} Exalt Limited. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
