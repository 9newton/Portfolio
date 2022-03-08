import React from "react";
import { Nav, Logo, Bars, NavBtn } from "./HeaderElements";

const HeaderBack = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="./images/logo.png"
            alt="logo"
          />
        </Logo>
        <NavBtn>
          <a
            className="btn-nav BackBtn"
            href="/"
            rel="noopener noreferrer"
          >
            Back ⮌
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default HeaderBack;
