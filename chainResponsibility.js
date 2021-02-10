// basic example reducers in react (chain of reducers that searches which should handle action)

const responsibilities = {
    handler1: 'handler1',
    handler2: 'handler2',
    handler3: 'handler3',
};

function nextHandler(request, generator) {
    if (generator.next) {
        const nextHandler = generator.next();
        if (typeof nextHandler.value === 'function') {
            return nextHandler.value(request, generator);
        }
    }
    return nextHandler.value;
}

function handler1(request, generator) {
    const responsibility = responsibilities.handler1;
    this.someOperation = function (request) {
        // some work
        return { ...request, requestUpdate: '1' };
    }
    if (request.responsibility === responsibility) {
        return this.someOperation(request)
    } else {
        return nextHandler(request, generator);
    }
}

function handler2(request, generator) {
    const responsibility = responsibilities.handler2;
    this.someOperation = function (request) {
        // some work
        return { ...request, requestUpdate: '2' };
    }
    if (request.responsibility === responsibility) {
        return this.someOperation(request)
    } else {
        return nextHandler(request, generator);
    }
}

function handler3(request, generator) {
    const responsibility = responsibilities.handler3;
    this.someOperation = function (request) {
        // some work
        return { ...request, requestUpdate: '3' };
    }
    if (request.responsibility === responsibility) {
        return this.someOperation(request)
    } else {
        return nextHandler(request, generator);
    }
}

function handleRequest(request) {
    const handlers = [handler1, handler2, handler3];
    function* iterateHandlers() {
        for (let handler in handlers) {
            yield handlers[handler];
        }
    }
    const generator = iterateHandlers();
    return generator.next().value(request, generator);
}

const requestHandled = handleRequest({ responsibility: responsibilities.handler2 });
console.log(requestHandled, 'requestHandled');
