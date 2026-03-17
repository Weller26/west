import Creature from "./Creature.js";

export default class Dog extends Creature {
    constructor() {
        super();
        this.name = 'Пес-бандит';
        this.currentPower = 3;
    }
}