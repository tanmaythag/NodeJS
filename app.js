const fs = require('fs');
//compression
const zlib = require('zlib');

const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt','utf8');
const  writeStream = fs.createReadStream('example1.txt');

// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
//     //console.log(chunk);
// });
// pipe
//readStream.pipe(writeStream);
readStream.pipe(gzip).pipe(writeStream);