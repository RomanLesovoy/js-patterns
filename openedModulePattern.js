const myRevealingModule = (function () {
    let privateVar = '';
    const publicVar = 'Hello World';
    function privateMethod() {
        console.log('Name: ' + privateVar);
    }

    function publicSetName(name) {
        privateVar = name;
    }
    function publicGetName() {
        privateMethod();
    }
    return {
        setName: publicSetName,
        getName: publicGetName,
        message: publicVar,
    }
})();
myRevealingModule.setName('Roman');
myRevealingModule.getName();

