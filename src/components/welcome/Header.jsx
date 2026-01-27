import React from 'react';
import MyPhoto from "./MyPhoto.jsx";
import MyTitle from "./MyTitle.jsx";
import ChangeLanguage from "./ChangeLanguage";

const Header = () => {
    const languages = ['en', 'ru', 'de']

  return (
      <div className="backgroundImage">
          <div className="blurEffect"></div>

          <div className="personal-info-wrapper overBlur">
              <MyPhoto/>
              <div className="personal-info">
                  <MyTitle/>
                  <div className="change-language-wrapper">
                      {languages.map((language, index) => (
                          <ChangeLanguage key={index} target={language}/>
                      ))}
                  </div>
              </div>

          </div>
      </div>
  );
};

export default Header;
