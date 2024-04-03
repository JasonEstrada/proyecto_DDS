var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    var fs = require('fs');

    fs.appendFile('mynewfile4.txt', 'SCREAM!', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');