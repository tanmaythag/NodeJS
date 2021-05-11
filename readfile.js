const fs = require('fs');
// fs.watchFile('demo.txt',"hello",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('success');
//         fs.readFile('demo.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
//     }
// });
fs.rename('demo.txt','demo1.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('success');
});

//other functions appendFile
// unlink
//part2
//work with folders
//craeting a folder => mkdir