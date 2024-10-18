import React from 'react';
import {useTranslation} from "react-i18next";
import {URLs} from "../../__data__/URLs";

const Hello = (props) => {
  const { project } = props;
  const { t } = useTranslation();

  return (
      <a href={URLs.home}>{`${t('project-hello')}${project.name}`}</a>
  );
};

export default Hello;
