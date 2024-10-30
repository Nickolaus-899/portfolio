import React from 'react';

import arrow from "../../images/footer/arrow2.svg"
import telegram from "../../images/footer/telegram.png"
import email from "../../images/footer/email.svg"
import phone from "../../images/footer/phone.svg"
import instagram from "../../images/footer/instagram.svg"
import git from "../../images/footer/git.png"
import logo from "../../images/footer/logo.svg"
import gmail from "../../images/footer/gmail.svg"

import {useTranslation} from "react-i18next";
import Contact from "./Contact.jsx";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const { t } = useTranslation();

  return (
      <div className="footer-container">
          <div className="footer-info">
              <div className="footer-title smooth-appear sm-fast">
                  <div className="dynamic-underline section-title">{t('full-name')}</div>
              </div>

              <div className="smooth-appear sm-medium">
                  <img src={logo} alt="logo" className="footer-logo"/>
              </div>

              <div className="smooth-appear sm-slow">
                  <h3>Contacts</h3>
                  <Contact text={"+7 953 999 44 73"} icon={phone} link={""}/>
                  <Contact text={"kolya.petukhov.03@mail.ru"} icon={email} link={""}/>
                  <Contact text={"gfq777@gmail.com"} icon={gmail} link={""}/>
                  <Contact text={"@Nickolaus_SRD"} icon={telegram} link={"https://t.me/Nickolaus_SDR"}/>
                  <Contact text={"petukhovnickolaus"} icon={instagram}
                           link={"https://www.instagram.com/petukhovnickolaus"}/>
                  <Contact text={"Nickolaus-899"} icon={git} link={"https://github.com/Nickolaus-899"}/>
              </div>
          </div>


          <button onClick={scrollToTop} className="footer-arrow">
              <img src={arrow} alt="Arrow"/>
          </button>
      </div>
  );
};

export default Footer;
