import React, {useState} from 'react';
import Card from './components/Player/Card';
import {diceImg} from "./components/Utils/Utils";

function App() {
  const [dice_1, setDice_1] = useState('');
  const [dice_2, setDice_2] = useState('');

  const throwDice = () => {
    setDice_1((Math.floor(Math.random() * 6) +1));
    setDice_2((Math.floor(Math.random() * 6) +1));
  };

    return (
        <div className="app-wrapper">
            <div className="game">
                <button className="game__btn-new">
                    <ion-icon name="add-circle-outline"/>
                    <span>new game</span>
                </button>
                <div className="game__left">
                    <Card/>
                </div>
                <div className="game__right">
                    <Card/>
                </div>
              {dice_1 && <img src={diceImg(dice_1)} alt="dice" className="game__dice-1"/>}
              {dice_2 && <img src={diceImg(dice_2)} alt="dice" className="game__dice-2"/>}
                <button className="game__btn-roll" onClick={throwDice}>
                    <ion-icon name="reload-outline"/>
                    <span>roll dice</span>
                </button>
                <button className="game__btn-hold">
                    <ion-icon name="download-outline"/>
                    <span>hold</span>
                </button>
                <input type="number" className="game__top-score" placeholder="SET SCORE" />
            </div>
        </div>
    );
}

export default App;
