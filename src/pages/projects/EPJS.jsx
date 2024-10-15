import React from 'react';

import Hello from "../../components/projects/Hello";
import {URLs} from "../../__data__/URLs";

const EPJS = () => {
  return (
      <div>
        <Hello/>
        <a href={URLs.home}>Home</a>
      </div>
  );
};

export default EPJS;
