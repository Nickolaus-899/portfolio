import React from 'react';
import {useTranslation} from "react-i18next";

const MyTitle = () => {
    const { t } = useTranslation();

  return (
      <div className="initTitle">
          <h1 className="mclaren-regular">Nikolai Petukhov</h1>
          <p className="mclaren-regular description-main">
              {t('my-description')}
          </p>
      </div>
  );
};

export default MyTitle;
