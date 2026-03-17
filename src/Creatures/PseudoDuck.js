import Dog from "./Dog.js";

export default class PseudoDuck extends Dog{
    constructor() {
        super();
        this.name = "Псевдоутка";
        this.currentPower = 3;
        this.maxPower = 3;
    }

    quack(){
        return "Гав!"
    }

    swims(){}
}