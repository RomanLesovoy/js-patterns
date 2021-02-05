function memoizedFunc(func) {
    const memoizedData = new WeakMap();
    return function() {
        const key = arguments[0]; // for real usage - key can be created by all arguments (including objects)
        if (memoizedData.has(key)) {
            console.log('used saved item')
            return memoizedData.get(key);
        }
        const result = func.apply(this, arguments);
        memoizedData.set(key, result);
        console.log('created new memoized item')
        return result;
    }
}
function test(obj) {
    return {
        ...obj,
        newValue: 3,
    }
}
const memoizedTest = memoizedFunc(test);
const customObject = { a: 1 }
memoizedTest(customObject); // create new
memoizedTest(customObject); // get saved