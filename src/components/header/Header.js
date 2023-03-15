import React from "react";
import HeaderSocial from "./HeaderSocial";
import "./header.css";
import CV from "./CV";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Suraj Basnet</h1>
        <h5 className="text-light">Web Developer</h5>
        <CV />
        <HeaderSocial />
      </div>
    </header>
  );
};

export default Header;
