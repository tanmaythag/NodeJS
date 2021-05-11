const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1, num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 2,3);

class Person extends EventEmitter{
    constructor(name){
      super();
      this._name = name;  
    }
    get name(){
        return this._name;
    }
}
let tanmay = new Person('tanmay');
let unnati = new Person('unnati');

unnati.on('name',()=>{
    console.log('my name is '+unnati.name);
});

tanmay.on('name',()=>{
    console.log('my name is '+tanmay.name);
});
tanmay.emit('name');
unnati.emit('name');