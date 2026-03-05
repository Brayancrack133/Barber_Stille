'use client';
import './page.css'
import React from 'react';
import HeaderMain from './Componentes/organismos/HeaderMain';
import HeroImage from './Componentes/moleculas/HeroImage';
import AboutSkillNet from './Componentes/moleculas/AboutSkillNet';
import Objective from './Componentes/moleculas/Objective';
import FeaturesSkillNet from './Componentes/moleculas/FeaturesSkillNet';
import Footer from './Componentes/organismos/Footer';

const Institucional = () => {
  return (
    <div>
      <HeaderMain />

      <HeroImage />
      <AboutSkillNet />
      <Objective />
      <FeaturesSkillNet />

      <Footer />
    </div>
  );
};

export default Institucional;