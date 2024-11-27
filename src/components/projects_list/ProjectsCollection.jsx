import React from 'react';
import ProjectsList from "./ProjectsList";
import {generateFeatures} from "../../__data__/features";

import {frontend_projects, getFrontEndExtra} from "../../__data__/frontend";
import {backend_projects, getBackEndExtra} from "../../__data__/backend";
import {hackathons, getHackathonExtra} from "../../__data__/hackathons";

const ProjectsCollection = () => {
    const frontHovers = generateFeatures('frcard', 4);
    const backHovers = generateFeatures('bccard', 6);
    const hackathonHovers = generateFeatures('htcard', 1);

  return (
      <div>
          <ProjectsList
              title={"Hackathons"}
              projects={hackathons}
              extra={getHackathonExtra}
              hovers={hackathonHovers}
          />

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
