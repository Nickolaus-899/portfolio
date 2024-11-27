import React from 'react';
import { AnimatePresence } from "framer-motion";
import {Route, Routes} from "react-router-dom";

import Home from "./Home";
import ProjectPage from "./projects/ProjectPage";
import {URLs} from "../__data__/URLs";

import {getFrontEndExtra} from "../__data__/frontend";
import {getBackEndExtra} from "../__data__/backend";
import {getHackathonExtra} from "../__data__/hackathons";

const Pages = (props) => {
  const { frontend_projects, backend_projects, hackathons } = props;

  return (
      <AnimatePresence mode={"wait"}>
        <Routes>
            <Route path={URLs.home} element={<Home/>}/>
            {frontend_projects.map((project, index) => (
                <Route key={index} path={project.path} element={
                    <ProjectPage project={project} getExtra={getFrontEndExtra}/>
                }/>
            ))}
            {backend_projects.map((project, index) => (
                <Route key={index} path={project.path} element={
                    <ProjectPage project={project} getExtra={getBackEndExtra}/>
                }/>
            ))}
            {hackathons.map((project, index) => (
                <Route key={index} path={project.path} element={
                    <ProjectPage project={project} getExtra={getHackathonExtra}/>
                }/>
            ))}
        </Routes>
      </AnimatePresence>
  );
};

export default Pages;
