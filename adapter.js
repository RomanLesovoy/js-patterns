const typeMovement = {
    water: 'water',
    road: 'road'
}

class Movement {
    constructor({ canMoveOn, moveOn, name }) {
        this.moveOn = moveOn;
        this.canMoveOn = canMoveOn;
        this.name = name;
    }
    move() {
        console.log(`${this.name} go on ${this.moveOn}`)
    }
}

class Boat extends Movement {
    constructor(moveOn) {
        super({ moveOn, canMoveOn: typeMovement.water, name: 'Boat' })
    }
}

class Car extends Movement {
    constructor(moveOn) {
        super({ moveOn, canMoveOn: typeMovement.road, name: 'Car' })
    }
}

class AdapterMovement {
    constructor({ moveOn, object }) {
        object.moveByTransportingSystem = function () {
            console.log(`${object.name} is transporting on ${moveOn}`);
        };
        this.transport({ object });
    }
    transport({ object }) {
        object.moveByTransportingSystem();
        object.moveByTransportingSystem = undefined;
    }
}

[new Car(typeMovement.road), new Boat(typeMovement.water), new Boat(typeMovement.road)]
    .forEach((movementTransport) => {
        if (movementTransport.canMoveOn !== movementTransport.moveOn) {
            new AdapterMovement({ moveOn: movementTransport.moveOn, object: movementTransport })
        } else {
            movementTransport.move();
        }
    })
