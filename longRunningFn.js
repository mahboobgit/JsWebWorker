self.onmessage = function(e){
    var name = "Hello " + e.data.name.firstName;
    if(e.data.name.lastName !== 'na')
        name = name + " !! Is your family name '" + e.data.name.lastName + "'?";

    self.postMessage(name);
    
};


var sleepForMiliSeconds = function(miliseconds){
    var startTime = new Date().getTime();
    var stopTime = startTime + miliseconds;
    while(stopTime >= new Date().getTime()){}
};