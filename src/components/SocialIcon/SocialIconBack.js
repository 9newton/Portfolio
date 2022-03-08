import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import styled from "styled-components";

export const SocialDiv = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
  display: none;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  a {
    font-size: 2.5rem;
    color: #fff;
    transition: 0.2s ease-in;
    &:hover {
      color: #2BFF88;
    }
  }

  .item + .item {
    margin-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

function SocialIconBack() {
  return (
    <SocialDiv>
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
            href="https://www.instagram.com/newtonpakorn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </SocialDiv>
  );
}

export default SocialIconBack;
