import React from 'react';
import {useTranslation} from "react-i18next";

const ChangeLanguage = (props) => {
    const { target } = props;

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Change the language when called
    };
  return (
      <div className="change-lang-button-wrapper">
          <button
              onClick={() => changeLanguage(target)}
              className="language-button"
          >
              <p className="dynamic-underline lang-option">{t(target)}</p>
          </button>
      </div>
  );
};

export default ChangeLanguage;
