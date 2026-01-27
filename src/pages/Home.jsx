import React from 'react';

import './../languages';
import Header from "../components/welcome/Header.jsx";
import Skills from "../components/skills/Skills.jsx";
import ExperienceList from '../components/experience/ExperienceList.jsx';
import ProjectsCollection from "../components/projects_list/ProjectsCollection.jsx";
import Footer from "../components/footer/Footer.jsx";

const Home = () => {
  return (
      <div>
          <Header/>
          <Skills/>
          <ExperienceList/>
          <ProjectsCollection/>
          <Footer/>
      </div>
  );
};

export default Home;
