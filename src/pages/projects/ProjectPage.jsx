import React from 'react';

import Hello from "../../components/projects/Hello";

const ProjectPage = (props) => {
  return (
      <div>
        <Hello project={props.project}/>
      </div>
  );
};

export default ProjectPage;
