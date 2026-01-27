import React from 'react';

import {useTranslation} from "react-i18next";
import {URLs} from "../../__data__/URLs";
import ProjectSection from "../../components/projects/ProjectSection";

import git from "./../../images/project/git.png"
import web from "./../../images/project/web.svg"
import youtube from "./../../images/project/youtube.svg"

const ProjectPage = (props) => {
    const { project, getExtra } = props;
    const { t } = useTranslation();

    const LinkType = {
        WEBSITE: 0,
        VIDEO: 1,
        GIT: 2
    };

    const extra = getExtra(project.id, t);
    const links = [];
    const addLink = (link, type) => {
        const item = {
            text: "",
            url: link,
            icon: null
        }

        switch (type) {
            case LinkType.WEBSITE: {
                item.text = t('project-link.website');
                item.icon = web;
                break;
            }
            case LinkType.VIDEO: {
                item.text = t('project-link.video');
                item.icon = youtube;
                break;
            }
            case LinkType.GIT: {
                item.text = t('project-link.git');
                item.icon = git;
                break;
            }
            default: {
                break
            }
        }

        links.push(item);
    }

    if (project.link) {
        addLink(project.link, LinkType.WEBSITE);
    }

    if (project.video) {
        addLink(project.video, LinkType.VIDEO);
    }

    if (project.git) {
        addLink(project.git, LinkType.GIT);
    }

  return (
      <div className="project-page-wrapper">
          <h1 className="project-header mclaren-regular">{`${project.name}`}</h1>

          <div className="project-short">
              <h2>{extra.short}</h2>
              <img src={extra.favicon} alt={"favicon"}/>
          </div>


          <div className="project-main">
              <ProjectSection title={t('project-page.history')} text={extra.history}/>
              <ProjectSection title={t('project-page.body')} text={extra.body}/>
              <ProjectSection title={t('project-page.links')} text={extra.ps} links={links}/>
          </div>

          <a href={URLs.home} className="dynamic-underline back-button">{t('project-page.back-button')}</a>
      </div>
  );
};

export default ProjectPage;
