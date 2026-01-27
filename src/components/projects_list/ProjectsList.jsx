import React from 'react';
import ProjectCard from "./ProjectCard.jsx";

import {useTranslation} from "react-i18next";

const ProjectsList = (props) => {
    const { projects, hovers, extra, title } = props;


    const { t } = useTranslation();

  return (
      <div className="projects-list-wrapper">
          <div className="smooth-appear">
              <h1 className="dynamic-underline section-title">{title}</h1>
          </div>

          <div className="projects-list">
          { projects.map((project, index) => (
                  <ProjectCard
                      key={index}
                      project={project}
                      extra={extra(project.id, t)}
                      hover={hovers[index % hovers.length]}
                  />
              ))}
          </div>

      </div>
  );
};

export default ProjectsList;
