class Command {
    constructor({ add, remove }) {
        this.remove = remove;
        this.add = add;
    }
}

let ships = ['ship1', 'ship2'];
let cars = ['car1', 'car2'];

const manageCars = {
    remove: function (car) {
        cars = cars.filter((_car) => _car !== car);
    },
    add: function (car) {
        cars.push(car);
    }
}
const manageShips = {
    remove: function (ship) {
        ships = ships.filter((_ship) => _ship !== ship);
    },
    add: function (ship) {
        ships.push(ship);
    }
}
const CarCommander = new Command(manageCars);
const ShipCommander = new Command(manageShips);

CarCommander.add('car3');
ShipCommander.add('ship3');
ShipCommander.remove('ship1');

console.log(ships, cars);