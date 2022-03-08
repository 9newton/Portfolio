import React, { useState } from "react";
import DropdownBack from "../Dropdown/DropdownBack";
import HeaderBack from "../Header/HeaderBack";
import SocialIconBack from "../SocialIcon/SocialIconBack";
import {
  ResumeImg,
} from "./ResumeElements";

function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
  <>
    <main>
      <DropdownBack isOpen={isOpen} toggle={toggle} />
      <HeaderBack toggle={toggle} />
      <div className="Container">
          <div className="DownloadCont">
          <a
            className="btn-download NavBtn"
            href="./resume.pdf"
            rel="noopener noreferrer"
            download
          >
            Download
          </a>
          <ResumeImg src="./images/resume.jpg" alt="resume"/>
          </div>
          <SocialIconBack />
      </div>
    </main>
  </>
  );
}

export default Resume;
