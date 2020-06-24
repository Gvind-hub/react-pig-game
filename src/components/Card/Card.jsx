import React, {useState} from 'react';
import cn from 'classnames';
import './Card.scss';


const Card = ({currentScore, score, active, playerName, setPlayerName}) => {

    const [toggleInput, setToggleInput] = useState(false);

    const changeName = e => {
        setPlayerName(e.target.value)
    };
    const inputSubmit = () => {
        const noName = 'enter player\'s name'
        if (playerName && playerName !== noName) {
            setToggleInput(false)
        } else {
            setPlayerName(noName);
        }
    };
    return (
        <div className="card">
            {toggleInput && <input className="card__name-input"
                type="text" minLength="1" maxLength="10" onChange={changeName}
                value={playerName} onBlur={inputSubmit} autoFocus
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
