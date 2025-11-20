
//Update the way to import and export ES6 specific
import logEvents from './logEvents.js';
import EventEmitter from 'events';

class MyEmitter extends EventEmitter{};

//initialize object

const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log',(msg) => logEvents(msg));
// testing
setTimeout(()=> {
    //emit event
    myEmitter.emit('log', 'Log Event Emitted!')
},2000);
