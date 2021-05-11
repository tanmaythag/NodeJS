const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello');

});
app.get('/example',(req,res)=>{
     res.send('hitting example route');
});
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    // user query
    console.log(req.query);
    res.send('hitting example route');
});

app.listen(3000);