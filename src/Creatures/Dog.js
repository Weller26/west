import Creature from "./Creature.js";

export default class Dog extends Creature {
    constructor() {
        //super('Пес-бандит', 3);
        super();
        this.name = 'Пес-бандит';
        this.currentPower = 3;
        this.maxPower = 3;
    }
}