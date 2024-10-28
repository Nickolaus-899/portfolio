import React from 'react';
import { AnimatePresence } from "framer-motion";
import {Route, Routes} from "react-router-dom";

import Home from "./Home";
import ProjectPage from "./projects/ProjectPage";
import {URLs} from "../__data__/URLs";
import {getFrontEndExtra} from "../__data__/frontend";
import {getBackEndExtra} from "../__data__/backend";

const Pages = (props) => {
  const { frontend_projects, backend_projects } = props;

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
        </Routes>
      </AnimatePresence>
  );
};

export default Pages;
