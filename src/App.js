import React, { useEffect, useState} from 'react';
import Card from './components/Card/Card';
import {diceImg} from "./components/Utils/Utils";
import cn from 'classnames';
import Popup from "./components/Popup/Popup";


function App() {
    const [dice_1, setDice_1] = useState('');
    const [dice_2, setDice_2] = useState('');
    const [currentScore, setCurrentScore] = useState(0);
    const [score_1, setScore_1] = useState(0);
    const [score_2, setScore_2] = useState(0);
    const [activePlayer, setActivePlayer] = useState(1);
    const [playerName_1, setPlayerName_1] = useState('player 1');
    const [playerName_2, setPlayerName_2] = useState('player 2');
    const [topScore, setTopScore] = useState(100);
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [popupText, setPopupText] = useState('');

    const resetScore = () => {
        setDice_1('');
        setDice_2('');
        setCurrentScore(0);
        setScore_1(0);
        setScore_2(0);
    };

    const gameInit = () => {
        resetScore();
        setActivePlayer(1);
    };

    const throwDice = () => {
        const throw_1 = Math.floor(Math.random() * 6) + 1;
        const throw_2 = Math.floor(Math.random() * 6) + 1;
        setDice_1(throw_1);
        setDice_2(throw_2);
        if (throw_1 === 1 || throw_2 === 1) {
            setCurrentScore(0);
            activePlayer === 1 ? setActivePlayer(2) : setActivePlayer(1);
            setVisiblePopup(true);
            setPopupText("You got 1. Next Player's turn!");
            return
        }
        setCurrentScore(throw_1 + throw_2 + currentScore);
    };

    const onWin = (player) => {
        gameInit();
        setVisiblePopup(true);
        setPopupText(`${player} wins!`)
    }

    const onHold = () => {
        if (activePlayer === 1) {
            setScore_1(currentScore + score_1);
            setActivePlayer(2);
        } else {
            setScore_2(currentScore + score_2);
            setActivePlayer(1);
        }
        setCurrentScore(0);
    };

    useEffect(() => {
        score_1 >= topScore && onWin('player 1');
        score_2 >= topScore && onWin('player 2');
    });

    return (
        <div className="app-wrapper">
            <div className="game">
                <button className="game__btn-new" onClick={gameInit} disabled={visiblePopup}>
                    <ion-icon name="add-circle-outline"/>
                    <span>new game</span>
                </button>
                <div className={cn("game__left", {"active": activePlayer === 1})}>
                    <Card currentScore={activePlayer === 1 ? currentScore : 0} score={score_1}
                          active={activePlayer === 1} playerName={playerName_1} setPlayerName={setPlayerName_1}/>
                </div>
                <div className={cn("game__right", {"active": activePlayer === 2})}>
                    <Card currentScore={activePlayer === 2 ? currentScore : 0} score={score_2}
                          active={activePlayer === 2} playerName={playerName_2} setPlayerName={setPlayerName_2}/>
                </div>
                {dice_1 && <img src={diceImg(dice_1)} alt="dice" className="game__dice-1"/>}
                {dice_2 && <img src={diceImg(dice_2)} alt="dice" className="game__dice-2"/>}
                <button className="game__btn-roll" onClick={throwDice} disabled={visiblePopup}>
                    <ion-icon name="reload-outline"/>
                    <span>roll dice</span>
                </button>
                <button className="game__btn-hold" onClick={onHold} disabled={!currentScore}>
                    <ion-icon name="download-outline"/>
                    <span>hold</span>
                </button>
                <input type="number" className="game__top-score" placeholder="SET SCORE"
                       onChange={e => setTopScore(e.target.value)} disabled={dice_1}/>
                <Popup setVisiblePopup={setVisiblePopup} popupText={popupText} visible={visiblePopup}/>
            </div>
        </div>
    );
}

export default App;
