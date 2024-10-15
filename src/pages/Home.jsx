import React from 'react';
import { useTranslation } from 'react-i18next';

import './../languages';
import {URLs} from "../__data__/URLs";

const Home = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Change the language when called
    };

  return (
      <div>
          <h1>{t('welcome')}</h1>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ru')}>Russian</button>
          <button onClick={() => changeLanguage('de')}>Deutsch</button>
          <a href={URLs.epjs}>EPJS project</a>
      </div>
  );
};

export default Home;
