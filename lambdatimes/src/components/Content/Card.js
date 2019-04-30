import React from 'react';
import propTypes from 'prop-types';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={`${card.img}`} alt="card" />
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: propTypes.shape({
    headline: propTypes.string,
    img: propTypes.string,
    author: propTypes.string
  })
}

export default Card;
