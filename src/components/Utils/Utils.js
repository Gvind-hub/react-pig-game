import dice1 from "../../assets/img/dice-1.png";
import dice2 from "../../assets/img/dice-2.png";
import dice3 from "../../assets/img/dice-3.png";
import dice4 from "../../assets/img/dice-4.png";
import dice5 from "../../assets/img/dice-5.png";
import dice6 from "../../assets/img/dice-6.png";

export const diceImg = (dice) => {
    switch (dice) {
        case 1: {
            return dice1
        }
        case 2: {
            return dice2
        }
        case 3: {
            return dice3
        }
        case 4: {
            return dice4
        }
        case 5: {
            return dice5
        }
        case 6: {
            return dice6
        }
        default: {
            return null
        }
    }
};