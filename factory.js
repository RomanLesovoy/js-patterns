const typeIphone = 'iphone';
const typeSamsung = 'samsung';

class Iphone {
    constructor(phoneOptions) {
        this.size = phoneOptions.size;
        this.buttons = phoneOptions.buttons;
    }
}

class Samsung {
    constructor(phoneOptions) {
        this.size = phoneOptions.size;
        this.buttons = phoneOptions.buttons;
    }
}

class PhonesFactory {
    createPhone(phoneOptions) {
        switch (phoneOptions.type) {
            case typeIphone:
                return new Iphone(phoneOptions);
            case typeSamsung:
                return new Samsung(phoneOptions);
            default:
                break;
        }
    }
}

const factory = new PhonesFactory();

const iphone = factory.createPhone({
    type: typeIphone,
    size: 10,
    buttons: [{}],
});

const samsung = factory.createPhone({
    type: typeSamsung,
    size: 12,
    buttons: [{}, {}],
});
