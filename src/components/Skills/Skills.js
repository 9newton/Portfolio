import React from "react";
import { Skill_Nomal, Skill_Other } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./SkillsElements";
function Skills() {
  return (
    <ContactWrapper id="skills">
      <div className="Container">
        <div className="SectionTitle">MY SKILLS</div>
        <div className="BigCardSkills">
          <div className="SkillBio tagline2">
            <strong>Programing</strong>
          </div>
          <Technologies>
            {Skill_Nomal.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
          <div className="SkillBio tagline2">
            <strong>Tools</strong>
          </div>
          <Technologies>
            {Skill_Other.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Skills;
