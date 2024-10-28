import React from 'react';

const ProjectSection = (props) => {
    const { title, text, links } = props;

  return (
      <div className="project-section-wrapper">
          <h1 className="mclaren-regular">{title}</h1>
          <div>{text}</div>
          {!!links ? (
              <div className="project-links-wrapper">
                  {links.map((link, index) => (
                      <div key={index} className="link-wrapper">
                          <img src={link.icon} alt={"icon"}/>
                          <a
                              href={link.url}
                              target={"_blank"}
                              rel="noopener noreferrer"
                              className="dynamic-underline link-underline"
                          >
                              {link.text}
                          </a>
                      </div>
                  ))}
              </div>
          ) : null}

      </div>
  );
};


export default ProjectSection;
