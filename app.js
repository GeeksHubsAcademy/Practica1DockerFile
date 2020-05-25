'use strict'
const EXPRESS = require('express');
const PORT= 8080;

const APP = EXPRESS();

APP.get('/',(req,res)=>res.send("Hello World"));

APP.listen(PORT,()=>{
    console.log(`Running on= http://${`localhost`}:${PORT}`);
})