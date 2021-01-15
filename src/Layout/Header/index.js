import React from "react";
import headStyle from "./scss/header.module.scss";
import Button from "../../components/Buttons";
import { BiMenuAltRight } from "react-icons/bi";

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
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!false);
    console.log("opened");
  };

  const mobileNav = (
    <header className={`${open ? headStyle.show : headStyle.hide}`}>
      <nav>
        <div
          className={headStyle.close}
          onClick={() => {
            setOpen(false), console.log("closed");
          }}
        >
          X
        </div>
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

  return (
    <>
      {open ? (
        mobileNav
      ) : (
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
          <BiMenuAltRight
            onClick={() => {
              toggleMenu();
            }}
          />
        </header>
      )}
    </>
  );
};

export default Header;
