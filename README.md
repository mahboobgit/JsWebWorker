# JsWebWorker

This demostrate the Web Worker capability of Javascript which gives a async programming model.


WORKER thread does not have access to 
1. Dom Object
2. window Object.
3. It cannot access some libraries like JQuery inside of the Worker thread script because JQuery can access Dom Object and since Dom Object cannot be accessed in Worker script so that makes JQuery as well invalid.


For threading model in Javascript, look for following options

1. Web Worker
2. Promises
3. Deferred
4. Timer




