class Observable {
    constructor() {
        this.subscribers = [];
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter((_subscriber) => _subscriber !== subscriber);
    }
    broadcast(subject) {
        this.subscribers.forEach((subscriber) => {
            if (subscriber.subscribeCallback) {
                subscriber.subscribeCallback(subject);
            }
        })
    }
}
const observer = new Observable();

class Subject {
    constructor(observer) {
        this.subject = 'Subject';
        this.observer = observer;
    }
    updateSubject(update = 'Updated subject') {
        this.subject = update;
        this.observer.broadcast(this.subject);
    }
}
const subject = new Subject(observer);

const subscriber1 = {
    who: 'subscriber1',
    subscribeCallback: function(subject) {
        console.log(`${this.who} got update: ${subject}`)
    }
}
observer.subscribe(subscriber1);

const subscriber2 = {
    who: 'subscriber2',
    subscribeCallback: function(subject) {
        console.log(`${this.who} got update: ${subject}`)
    }
}
observer.subscribe(subscriber2);

subject.updateSubject();

observer.unsubscribe(subscriber1);

subject.updateSubject('Updated again');