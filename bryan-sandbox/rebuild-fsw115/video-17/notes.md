# Promise Chaining
    - Using a return statement in the callback function of a resolved or rejected promise, you create a new promise.
    - The new promise's .then() receives the data whice is returned from the previous promise.
    - This allows you to handle multiple asychronous events in the order they happen, so the 2nd request waits until the first request is complete.