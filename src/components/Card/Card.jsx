import React, {useState} from 'react';
import cn from 'classnames';
import './Card.scss';


const Card = ({currentScore, score, active, playerName, setPlayerName}) => {

    const [toggleInput, setToggleInput] = useState(false);
    const changeName = e => {
        setPlayerName(e.target.value)
    };
    const inputSubmit = () => {
        if (playerName && playerName !== 'enter player\'s name') {setToggleInput(false)}
        else {
            setPlayerName('enter player\'s name');
        }
    };
    return (
        <div className="card">
            {toggleInput && <input type="text" minLength="1" maxLength="10" onChange={changeName}
                                   value={playerName} onBlur={inputSubmit} onFocus
                                   onKeyPress={e => e.key === "Enter" && inputSubmit()}/>}
            {!toggleInput && <h2 className={cn("card__player-name", {"active": active})}
                                 onDoubleClick={() => setToggleInput(true)}>{playerName}</h2>}
            <p className="card__player-score">{score}</p>
            <div className="card__score-box">
                <p className="card__current-label">current</p>
                <p className="card__current-score">{currentScore}</p>
            </div>
        </div>
    );
};

export default Card;
