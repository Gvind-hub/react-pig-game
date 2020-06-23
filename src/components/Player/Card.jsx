import React from 'react';

import './Card.scss';


const Card = ({}) => {
    return (
        <div className="card">
            <h2 className="card__player-name">player 1</h2>
            <p className="card__player-score">0</p>
            <div className="card__score-box">
                <p className="card__current-label">current</p>
                <p className="card__current-score">0</p>
            </div>

        </div>
    );
};

export default Card;
