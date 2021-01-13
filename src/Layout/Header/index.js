import React from "react";
import headStyle from "./scss/header.module.scss";
import Button from "../../components/Buttons";

const navLinks = [
  { text: "About Us", path: "#about" },
  { text: "Services", path: "#services" },
  { text: "User App", path: "#app" },
  { text: "Agent", path: "#agent" },
  { text: "Cooperate", path: "#cooperate" },
  { text: "Testimonials", path: "#testimonials" },
  { text: "Contact Us", path: "#contact" },
];

const Header = () => {
  return (
    <header className={headStyle.root}>
      <img
        src="/svgs/Logo.svg"
        alt="exalt courier services logo"
        className="courier-logo"
      />
      <nav>
        <ul>
          {navLinks.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.path}>{item.text}</a>
              </li>
            );
          })}
        </ul>
        <Button className="btn-primary">Login</Button>
      </nav>
    </header>
  );
};

export default Header;
