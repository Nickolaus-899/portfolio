import React from 'react';
import LanguageSkill from "./LanguageSkill";
import Study from "./Study";
import {useTranslation} from "react-i18next";
import {languages, educations, hobby} from "./skills.js";
import Hobby from "./Hobby.jsx";

const Skills = () => {
    const { t } = useTranslation();

    return (
      <div className="skills-wrapper">
          <div className="skill">
              <h1 className="dynamic-underline">{t('skills.languages')}</h1>
              <div>
                  {languages(t).map((language, index) => (
                      <LanguageSkill key={index} language={language}/>
                  ))}
              </div>
          </div>

          <div className="skill">
              <h1 className="dynamic-underline">{t('skills.education')}</h1>
              <div>
                  {educations(t).map((education, index) => (
                      <Study key={index} education={education}/>
                  ))}
              </div>
          </div>

          <div className="skill">
              <h1 className="dynamic-underline">{t('skills.hobby')}</h1>
              <div>
                  {hobby(t).map((hobby, index) => (
                      <Hobby key={index} hobby={hobby}/>
                  ))}
              </div>
          </div>
      </div>

  );
};

export default Skills;
