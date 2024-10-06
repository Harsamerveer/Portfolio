// src/components/projects/SlidingStack.js
import React from 'react';
import Card from './Card';
import './SlidingStack.scss';

const SlidingStack = ({ cards }) => {
  return (
    <div className="sliding-stack">
      <div className="sliding-stack-inner">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default SlidingStack;
