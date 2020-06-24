import React from 'react';
import cn from 'classnames';

import './PlayerChangePop.scss';


const PlayerChangePop = ({setVisiblePopup, popupText, visible}) => {

    const closePopup = () => {
        setVisiblePopup(false)
    };

    return (
        <div className={cn("popup", {"visible" : visible})}>
            <h2 className="popup__text">{popupText}</h2>
            <button className="popup__btn-continue" onClick={closePopup}>continue</button>
        </div>
    );
};

export default PlayerChangePop;
