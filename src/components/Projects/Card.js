// src/components/projects/Card.js
import React from 'react';
import './card.scss';

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default Card;
