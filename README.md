# JsWebWorker

This demostrate the Web Worker capability of Javascript which gives a async programming model.


WORKER thread does not have access to  

1. Dom Object.  
2. window Object.  
3. It cannot access some libraries like JQuery inside of the Worker thread script because JQuery can access Dom Object and since Dom Object cannot be accessed in Worker script so that makes JQuery as well invalid.  



For threading model in Javascript, look for following options  

1. Web Worker  
2. Promises  
3. Deferred  
4. Timer  


Deferred: It will allow us to create a long running operation and allow other developers to register event handlers  


DEFERRED object is used to manage long running operations and raise events on complition, failure, etc. It's coming from JQuery.  


1. It can be user for if we want to set up some progress bar.  


PROMISES: Its a promise for returning an object in future.

done  : Done  
reject   : Failure  
progress : InProgress  

