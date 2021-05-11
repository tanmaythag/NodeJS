var http = require('http');
var events = require('events');

var num = 0;

var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(req,res){
    eventEmitter.emit('someone requested');
    res.end('server works');
});

eventEmitter.on('someone requested',function(){
    num++;
   console.log(num + ' requst has been made on the the server'); 

});

server.listen(3000,'localhost', function(){
    console.log('server started on port:3000');
});
 