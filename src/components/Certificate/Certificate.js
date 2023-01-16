import React from "react";
import { Certificate_List } from "../../data/ProjectData";
import {
  Cert,
  Cer,
  CerImg,
  CerTitle,
  ContactWrapper,
} from "./CertificateElements";
function Certificate() {
  return (
    <ContactWrapper id="certificate">
      <div className="Container">
        <div className="SectionTitle">CERTIFICATE</div>
        <div className="BigCard">
          <div className="SkillBioCer">
            <strong>🏆Essential SQL For Everyone🏆</strong>
          </div>
          <Cert>
            {Certificate_List.map((stack, index) => (
              <Cer key={index} className="cer">
                <CerTitle>{stack.title}</CerTitle>
                <CerImg src={stack.img} alt={stack.name} />
              </Cer>
            ))}
          </Cert>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Certificate;