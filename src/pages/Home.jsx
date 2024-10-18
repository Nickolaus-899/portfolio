import React from 'react';

import './../languages';
import Header from "../components/welcome/Header.jsx";
import Skills from "../components/skills/Skills.jsx";

const Home = () => {
  return (
      <div>
          <Header/>
          <Skills/>
      </div>
  );
};

export default Home;
