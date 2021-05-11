// const http = require('http');
// const server = http.createServer((req,res)=>{
    
//     if(req.url === '/'){
//            res.write('hello');
//            res.end();
//        }
//     else{
//         res.write('any other domain');
//         res.end();
//     }
// });
// server.listen('3000');

//serving static file 
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./');
    res.writeHead(200,{'content-type': 'image/png'});
    readStream.pipe(res);
});
server.listen(3000);