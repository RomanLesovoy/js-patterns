const myModule = (function () {
    function moduledFunction () {
        return 1;
    }

    return {
        moduleMethod: moduledFunction,
    }
})();
console.log(myModule.moduleMethod(), 'pattern module');
