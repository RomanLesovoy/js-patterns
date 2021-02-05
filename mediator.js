class Mediator {
    assignRelatives(Relative1, Relative2) {
        this.relative1 = Relative1;
        this.relative2 = Relative2;
    }
    relative1ToRelative2() {
        console.log(this.relative1.toSay)
        relative2.toSay = 'Hi!';
    }
    relative2ToRelative1() {
        console.log(this.relative2.toSay)
        relative1.toSay = 'What up?';
    }
}
const mediatorInstance = new Mediator();

class Sayable {
    constructor(whatToSay = 'Hello') {
        this._toSay = whatToSay;
    }
    get toSay() {
        return this._toSay;
    }
    set toSay(value) {
        this._toSay = value;
    }
}

class Relative1 extends Sayable {
    doSmth() {
        mediatorInstance.relative1ToRelative2();
    }
}

class Relative2 extends Sayable {
    doSmth() {
        mediatorInstance.relative2ToRelative1();
    }
}

const relative1 = new Relative1();
const relative2 = new Relative2();

mediatorInstance.assignRelatives(relative1, relative2);

relative1.doSmth();
relative2.doSmth();
relative1.doSmth();

/**
 * Mediator is interface for interacting between different Objects
 */