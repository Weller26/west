import Duck from "./Duck.js";

export default class Brewer extends Duck {
    constructor() {
        super();
        this.name = 'Пивовар';
        this.currentPower = 2;
        this.maxPower = 2;
    }

    doBeforeAttack(gameContext, continuation) {
        for (let card of gameContext.currentPlayer.table.concat(gameContext.oppositePlayer.table)) {
            if (card && card.quacks && card.swims) {
                card.view.signalHeal();
                card.maxPower += 1;
                card.currentPower_ += 2;
                card.updateView()
            }

        }
        continuation();
    };

    getDescriptions(card) {
        const arr = super.getDescriptions(card);
        arr.push('\n Разливает всем пива и баффает атаку')
        return arr
    }
}