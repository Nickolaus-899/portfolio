import React from 'react';
import { AnimatePresence } from "framer-motion";
import {Route, Routes} from "react-router-dom";

import Home from "./Home";
import EPJS from "./projects/EPJS";
import {URLs} from "../__data__/URLs";

const Pages = () => {
  return (
      <AnimatePresence mode={"wait"}>
        <Routes>
            <Route path={URLs.home} element={<Home/>}/>
            <Route path={URLs.epjs} element={<EPJS/>}/>
        </Routes>
      </AnimatePresence>
  );
};

export default Pages;
