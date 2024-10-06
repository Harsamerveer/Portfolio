// src/components/projects/index.js
import React from 'react';
import SlidingStack from './SlidingStack.js';
import './index.scss';
import security from '../../assets/Images/security.jpg'

const cards = [
  { image: security, title: 'Public Security Solutions' }
];

const Projects = () => {
  return (
    <div className="projects">
      <SlidingStack cards={cards} />
    </div>
  );
};

export default Projects;
