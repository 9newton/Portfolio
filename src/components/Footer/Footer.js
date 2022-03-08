import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(./images/footer.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 1rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded by{" "}
          <a
            href="https://github.com/9newton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pakorn Khunleang
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
