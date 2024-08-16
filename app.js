//suruma empty folder vanaune tespachhi npm init garney ani app.js file vanauney 

const express = require('express');
const app = express();
// const app = require('express);

app.get('/', (req, res) =>{
    res.send("Hello World")
})
app.get('/about', (req, res) =>{
    res.send("this is about page")
})
    app.listen(3000, ()=>{
        console.log("Project suru vayo haii tw,,,,,,,, ")
    })