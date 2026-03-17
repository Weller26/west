import Card from './Card.js';
import Game from './Game.js';
import TaskQueue from './TaskQueue.js';
import SpeedRate from './SpeedRate.js';
import Duck from './Creatures/Duck.js';
import Dog from './Creatures/Dog.js';
import Gatling from './Creatures/Gatling.js';
import Brewer from "./Creatures/Brewer.js";

// Отвечает является ли карта уткой.
function isDuck(card) {
    return card && card.quacks && card.swims;
}

// Отвечает является ли карта собакой.
function isDog(card) {
    return card instanceof Dog;
}

// Колода Шерифа, нижнего игрока.
const seriffStartDeck = [
    new Brewer(),
    new Brewer(),
    new Brewer(),
];
const banditStartDeck = [
    new Dog(),
    new Dog(),
];


// Создание игры.
const game = new Game(seriffStartDeck, banditStartDeck);

// Глобальный объект, позволяющий управлять скоростью всех анимаций.
SpeedRate.set(1);

// Запуск игры.
game.play(false, (winner) => {
    alert('Победил ' + winner.name);
});
