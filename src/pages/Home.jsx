import React from 'react';
import {URLs} from "../__data__/URLs";

const Home = () => {
  return (
      <div>
        <h1>Hello!</h1>
        <a href={URLs.epjs}>EPJS project</a>
      </div>
  );
};

export default Home;
