import React from 'react';
import {useTranslation} from "react-i18next";
import {exps} from "../../__data__/experience.js";
import ExperienceItem from './ExperienceItem.jsx';


const ExperienceList = () => {
    const { t } = useTranslation();

    return (
        <div className="exp-lst-wrapper">
            <div className="smooth-appear">
                <h1 className="dynamic-underline section-title">Experience</h1>
            </div>
            
            <div className="exp-list">
                {exps(t).map((exp, index) => (
                    <div className="smooth-appear" key={index}>
                        <ExperienceItem exp={exp}/>
                    </div>
                    
                ))}
            </div>
        </div>
    )
};

export default ExperienceList;
