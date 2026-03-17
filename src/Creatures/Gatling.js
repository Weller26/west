import Creature from "./Creature.js";
import TaskQueue from "../TaskQueue.js";

export default class Gatling extends Creature {
    constructor() {
        //super('Гатлинг', 6);
        super();
        this.name = 'Гатлинг';
        this.currentPower = 6;
        this.maxPower = 6;
    }

    attack(gameContext, continuation) {
        const taskQueue = new TaskQueue();

        const enemyCardArray = gameContext.oppositePlayer.table;
        //const {currentPlayer, oppositePlayer, position, updateView} = gameContext;

        // taskQueue.push(onDone => this.view.showAttack(onDone));
        // taskQueue.push(onDone => {
        //     const oppositeCard = oppositePlayer.table[position];
        //
        //     if (oppositeCard) {
        //         this.dealDamageToCreature(this.currentPower, oppositeCard, gameContext, onDone);
        //     } else {
        //         this.dealDamageToPlayer(1, gameContext, onDone);
        //     }
        // });

        taskQueue.push(onDone => this.view.showAttack(onDone));
        for (const enemyCard of enemyCardArray) {
            taskQueue.push(onDone => {
                this.dealDamageToCreature(2, enemyCard, gameContext, onDone);
            });
        }

        taskQueue.continueWith(continuation);
    }
}