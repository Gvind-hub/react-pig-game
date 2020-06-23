import React from 'react';
import dice1 from './assets/img/dice-1.png';
import Card from "./components/Player/Card";

function App() {
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
            <img src={dice1} alt="dice" className="game__dice-1"/>
            <img src={dice1} alt="dice" className="game__dice-2"/>
            <button className="game__btn-roll">
                <ion-icon name="reload-outline"/>
                <span>roll dice</span>
            </button>
            <button className="game__btn-hold">
                <ion-icon name="download-outline"/>
                <span>hold</span>
            </button>
            <input type="number" className="game__top-score"/>
        </div>
        </div>
    );
}

export default App;
