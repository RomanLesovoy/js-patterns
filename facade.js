class FirstClass {
    someFunction1() {
        // complex logic
    }
    someFunction2() {
        // complex logic
    }
}

class SecondClass {
    someFunction1() {
        // complex logic
    }
    someFunction2() {
        // complex logic
    }
}

class ThirdClass {
    someFunction1() {
        // complex logic
    }
    someFunction2() {
        // complex logic
    }
}
// etc ...

class Facade { // main idea provide a high-level interface that makes a subsystem or toolkit easy to use for the client
    summFirstClass() {
        const instance = new FirstClass();
        // some calls of FirstClass instance
    }
    summSecondClass() {
        const instance = new SecondClass();
        // some calls of SecondClass instance
    }
    summThirdClass() {
        const instance = new ThirdClass();
        // some calls of ThirdClass instance
    }
    // etc ...
}