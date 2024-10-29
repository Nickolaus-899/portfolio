import React from 'react';
import {useTranslation} from "react-i18next";

import de from "../../images/languages/de.svg"
import ru from "../../images/languages/ru.svg"
import en from "../../images/languages/en.svg"

const LanguageSkill = (props) => {
    const { language } = props;

    const { t } = useTranslation();

    const logos = {
        de: de,
        en: en,
        ru: ru
    }

  return (
      <div className="language-skill">
          <div className="language-icon">
              <img src={logos[language.id]} alt="icon of a language"/>
          </div>
          <div className={"lang-1"}>
              <div className={"lang-2"}>
                  <h3 className={"mclaren-regular"}>{t(language.id)}</h3>
                  <p>{language.knowledge}</p>
              </div>
              <div className={"lang-3"}>{language.description}</div>
          </div>
      </div>
  );
};

export default LanguageSkill;
