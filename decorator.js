function decoratedDividedByTwoFunction(func) {
    const decorator = function(arguments) {
        if (typeof arguments[0] === 'number') {
            arguments[0] = arguments[0] / 2;
        }
        return arguments;
    }
    return function() {
        return func.apply(this, decorator(arguments));
    }
}

function multiply () {
    let sum = 1;
    for (let arg of arguments) {
        sum *= arg;
    }
    return sum;
}

const decoratedMultiply = decoratedDividedByTwoFunction(multiply);
decoratedMultiply(2, 5);

class Car {
    constructor(type) {
        this.type = type;
    }
}

function carWithSkin(carInstance, skin = 'dark') {
    carInstance.skin = skin;
}

const mercedes = new Car('mercedes');
carWithSkin(mercedes);

/* Class style */

class AnySubject {
    value = 1;
    updateValue(newValue) {
        this.value = newValue;
    }
}
const subject = new AnySubject();
function Notifiable (context) {
    this.context = context;
    this.context.subscribers = [];
    this.context.subscribe = function (subscriber) {
        this.subscribers.push(subscriber);
    }
    this.context.notify = function (value) {
        this.subscribers.forEach((subscriber) => {
            subscriber.callback(value);
        })
    }
    this.context.notify = this.context.notify.bind(this.context);
}
const notifiableSubject = new Notifiable(subject);

notifiableSubject.context.updateValue(2);
notifiableSubject.context.subscribe({ callback: (v) => { console.log(v); }});
notifiableSubject.context.notify(notifiableSubject.context.value);


/* old style */

function Ball(param) {
    this._radius = param.radius;
    this._color = param.color;
}
Ball.prototype = {
    constructor: Ball,
    INCREMENTATION_STEP: 5,
    draw: function() {
        console.log("ball drawn with radius:" + this._radius + " and color: " + this._color)
    },
    inc: function() {
        this._radius += this.INCREMENTATION_STEP
    }
}

new Ball({
    radius:100,
    color:"red"
});

function StripedBall(ball) {
    this._ball = ball
}
StripedBall.prototype = {
    constructor: StripedBall,
    draw: function() {
        this._ball.draw();
        console.log("and with stripes");
    },
    inc: function() {
        return this._ball.inc();
    }
}