import React from 'react';

const ProjectCard = (props) => {
    const { project, extra, hover } = props;

    const { short, favicon } = extra;

  return (
      <div className="project-item-wrapper smooth-appear">
          <a href={project.path} className={`project-card ${hover ? hover : ''}`}>
              <div className="card-title">
                  {favicon ? (
                      <img src={favicon} alt={'Project icon'}/>
                  ) : null}

                  <h3 className="mclaren-regular">{project.name}</h3>
              </div>

              <div>{short}</div>
          </a>
      </div>
  );
};

export default ProjectCard;
