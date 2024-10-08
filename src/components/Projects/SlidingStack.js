import React, { useState, useEffect } from 'react';
import Card from './Card';
import './SlidingStack.scss';

const SlidingStack = ({ cards, leftText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="sliding-stack-container">
      <div className="left-side">
        <h1>{leftText.title}</h1>
        <p>{leftText.description}</p>
      </div>
      <div className="sliding-stack">
        <div className="sliding-stack-inner">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card-wrapper ${index === currentIndex ? 'active' : ''}`}
              style={{
                opacity: index === currentIndex ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            >
              <Card image={card.image} title={card.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingStack;