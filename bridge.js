class RelationAdapter {
  constructor(relationTarget) {
    this.relationTarget = relationTarget;
  }
}

class Bridge {
  moveFunc = null;
  stopFunc = null;
  move() {
    if (this.moveFunc) {
      this.moveFunc();
    }
  }
  stop() {
    if (this.stopFunc) {
      this.stopFunc();
    }
  }
}

class ActionsManAdapter extends RelationAdapter {
  move() {
    this.relationTarget.move();
  }
  stop() {
    this.relationTarget.sit();
  }
}

class ActionsCarAdapter extends RelationAdapter {
  move() {
    this.relationTarget.drive();
  }
  stop() {
    this.relationTarget.parking();
  }
}

class Man {
  move() {
    console.log('man is moving')
  }
  sit() {
    console.log('man is sitting')
  }
}

class Car {
  drive() {
    console.log('car is driving')
  }
  parking() {
    console.log('car is parking')
  }
}

function move(moveWho) {
  moveWho.move();
}

function stop(stopWho) {
  stopWho.stop()
}

const car = new Car();
const man = new Man();

/* Double adapters */
const adaptedMan = new ActionsManAdapter(man); // adapter for Man
const adaptedCar = new ActionsCarAdapter(car); // adapter for Car
move(adaptedCar);
stop(adaptedCar);
move(adaptedMan);
stop(adaptedMan);


/* Bridge */
const bridge = new Bridge(); // Or use bridge for any
bridge.moveFunc = man.move;
bridge.stopFunc = man.sit;
bridge.move();
bridge.stop();
bridge.moveFunc = car.drive;
bridge.stopFunc = car.parking;
bridge.move();
bridge.stop();
