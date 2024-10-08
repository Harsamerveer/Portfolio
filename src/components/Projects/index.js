import React from 'react';
import SlidingStack from './SlidingStack';
import './index.scss';
import security from '../../assets/Images/security.jpg';
import gymproducts from '../../assets/Images/gymproducts.jpeg';
import budgetsystem from '../../assets/Images/budgetsystem.jpeg';

const cards = [
  { image: security, title: 'Public Security Solutions' },
  { image: gymproducts, title: 'Gym Products' },
  { image: budgetsystem, title: 'Student Budget Management System' },

  // Add more cards if needed
];

const leftText = {
  title: 'In Progress Projects',
  description: 'Here are some of key projects focused on public solutions and innovations in the field.',
};

const Projects = () => {
  return (
    <div className="projects">
      <SlidingStack cards={cards} leftText={leftText} />
    </div>
  );
};

export default Projects;