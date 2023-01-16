import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="./images/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" exct smooth={true}>
            PROJECTS
          </NavLink>
          <NavLink className="menu-item" to="certificate" smooth={true}>
            CERTIFICATE
          </NavLink>
          <NavLink className="menu-item" to="skills" smooth={true}>
            SKILLS
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            CONTACT
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn-nav NavBtn"
            href="/resume"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
