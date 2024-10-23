import React from 'react';
import {useTranslation} from "react-i18next";
import {URLs} from "../../__data__/URLs";

const Hello = (props) => {
  const { project } = props;
  const { t } = useTranslation();

  return (
      <div>
        <h1>{`${t('project-hello')}${project.name}`}</h1>
        <a href={URLs.home}>Back</a>
      </div>

  );
};

export default Hello;
