import React from "react";
import { Skill_Nomal, Skill_Beginner, Skill_Other } from "../../data/ProjectData";
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
        <div className="SectionTitle">My Skills</div>
        <div className="BigCard">
          <div className="SkillBio tagline2">
            <strong>PROGRAMING</strong>
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
              <strong>Beginner</strong>
          </div>
          <Technologies>
            {Skill_Beginner.map((stack, index) => (
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
