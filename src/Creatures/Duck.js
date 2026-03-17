import Creature from "./Creature.js";

export default class Duck extends Creature {
    constructor() {
        super();
        this.name = 'Мирная утка';
        this.currentPower = 2;
    }

    quacks() {
        console.log('quack')
    }

    swims() {
        console.log('float: both;')
    }
}