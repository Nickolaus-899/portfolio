import React from 'react';
import ProjectsList from "./ProjectsList";
import {generateFeatures} from "../../__data__/features";
import {frontend_projects, getFrontEndExtra} from "../../__data__/frontend";
import {backend_projects, getBackEndExtra} from "../../__data__/backend";

const ProjectsCollection = () => {
    const frontHovers = generateFeatures('frcard', 4);
    const backHovers = generateFeatures('bccard', 5);

  return (
      <div>
          <ProjectsList
              title={"Frontend Projects"}
              projects={frontend_projects}
              extra={getFrontEndExtra}
              hovers={frontHovers}
          />

          <ProjectsList
              title={"Backend Projects"}
              projects={backend_projects}
              extra={getBackEndExtra}
              hovers={backHovers}
          />
      </div>
  );
};

export default ProjectsCollection;
