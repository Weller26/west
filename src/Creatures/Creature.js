import Card from "../Card.js";

export default class Creature extends Card {
    constructor() {
        super();
    }

    getDescriptions() {
        return [getCreatureDescription(this), ...super.getDescriptions()];
    }
}

function getInheritancesDescription (card) {
    const names = [];
    let obj = card;
    while (true) {
        obj = Object.getPrototypeOf(obj);
        names.push(obj.constructor.name);
        if (obj === Card.prototype)
            break;
    }
    return names;
}

function getCreatureDescription(card) {
    const names = getInheritancesDescription(card)
    if (names.includes('Duck') && names.includes('Dog')) {
        return 'Утка-Собака';
    }
    if (names.includes('Duck')) {
        return 'Утка';
    }
    if (names.includes('Dog')) {
        return 'Собака';
    }
    if (names.includes('Gatling')) {
        return 'Гатлинг';
    }
    return 'Существо';
}