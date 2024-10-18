import React from 'react';
import {useTranslation} from "react-i18next";

const ChangeLanguage = (props) => {
    const { target } = props;

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Change the language when called
    };
  return (
      <button
          onClick={() => changeLanguage(target)}
          className="language-button"
      >
          <p className="dynamic-underline">{t(target)}</p>
      </button>
  );
};

export default ChangeLanguage;
