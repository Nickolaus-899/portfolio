import React from 'react';
import {useTranslation} from "react-i18next";


const ExperienceItem = (props) => {
    const { exp } = props;
    const { t } = useTranslation();

    return (
        <div className="exp-item-wrapper">
            <div className="exp-info exp-column">
                <h2 className={exp.hover}>{exp.name}</h2>
                <p>{exp.duration}</p>
            </div>
            
            <div className="exp-column">
                <h3>{t("exp-item.field-h")}</h3>
                <p>{exp.field}</p>
            </div>

            <div className="exp-column exp-col-extended">
                <h3>{t("exp-item.interesting-h")}</h3>
                <p>{exp.interesting}</p>
            </div>
        </div>
    )
};

export default ExperienceItem;
