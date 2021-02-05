let singletonInstance = null;
function SingletoneFunction(instanceName = '1') {
    if (singletonInstance) {
        return singletonInstance;
    }
    this.instance = `instance: ${instanceName}`;
    singletonInstance = this;
    return singletonInstance;
}

const singletonCall1 = new SingletoneFunction('1');
const singletonCall2 = new SingletoneFunction('2');

console.log(singletonCall1 === singletonCall2, 'singleton');

class SingletonClass {
    constructor(name = '1') {
        if (!!SingletonClass.instance) {
            return SingletonClass.instance;
        }

        SingletonClass.instance = this;
        this.name = name;
        return this;
    }
}
console.log(new SingletonClass('2') === new SingletonClass('3'), 'singleton class');