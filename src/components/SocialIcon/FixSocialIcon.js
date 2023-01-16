import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  
  .bg{
    background-color: #161b27;
    position: relative;
    padding: 10px;
    padding-bottom: 10px;
    border: 2px solid #161b27;
    border-radius: 20px;
  }

  ul {
    display: block;
  }

 .item{
    margin-top: 0.5rem;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: #f4f3ef;
    transition: 0.2s ease-in;
    &:hover {
      color: #ffcb00;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <div className="bg">
        <ul>
          <li className="item">
            <a
              href="https://www.facebook.com/pakorn.khunleang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/9newton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.instagram.com/pakornkl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </Social>
  );
}

export default FixSocialIcon;
