import Dog from "./Dog.js";

export default class Lad extends Dog{
    constructor() {
        super();
        this.currentPower = 20;
        this.name = "Братки";
        this.maxPower = 20;
    }

    static getInGameCount() {
        return this.inGameCount || 0; }

    static setInGameCount(value) {
        this.inGameCount = value; }

    static getBonus() {
        const count = this.getInGameCount();
        return count * (count + 1) / 2
    }

    doAfterComingIntoPlay(gameContext, continuation){
        let newValue = Lad.getInGameCount();
        Lad.setInGameCount(newValue++);
        super.doAfterComingIntoPlay(gameContext, continuation);
    }
    doBeforeRemoving(gameContext, continuation){
        let newValue = Lad.getInGameCount();
        Lad.setInGameCount(newValue--);
        super.doBeforeRemoving(gameContext, continuation);
    }

    modifyDealedDamageToCreature(value, toCard, gameContext, continuation){
        super.modifyDealedDamageToCreature(value + Lad.getBonus(), toCard, gameContext, continuation);
    }

    modifyTakenDamage(value, fromCard, gameContext, continuation){
        super.modifyTakenDamage(value - Lad.getBonus(), fromCard, gameContext, continuation);
    }

    getDescriptions(card){
        let descriptions = super.getDescriptions(card);
        if (Lad.prototype.hasOwnProperty('modifyDealedDamageToCreature') ||
            Lad.prototype.hasOwnProperty('modifyTakenDamageToCreature')) {
            descriptions.push("Чем их больше, тем они сильнее");
        }
        return descriptions;
    }
}