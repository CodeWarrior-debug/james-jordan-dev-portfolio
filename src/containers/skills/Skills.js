import React, {useContext} from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  // const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="main" id="skills">
    {/* <div className={isDark ? "dark-mode main" : "main"} id="skills"> */}
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className="skills-heading"
              // className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className= "subTitle skills-text-subtitle" 
              // className={ isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle" }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className= "subTitle skills-text" 
                    // className={ isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text" }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
