import Dog from "./Dog.js";

export default class Trasher extends Dog {
    constructor() {
        super();
        this.name = 'Громила';
        this.currentPower = 5;
        this.maxPower = 5;
    }

    modifyTakenDamage(value, fromCard, gameContext, continuation) {
        this.view.signalAbility(() => { continuation(value - 1) })
    }

    getDescriptions(card) {
        const arr = super.getDescriptions(card);
        arr.push('\n Если Громилу атакуют, то он получает на 1 меньше урона')
        return arr
    }
}