const express = require('express');
const routes = require("./Routes/routes.js");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const setDbConnection = require("./Models/database.js")


setDbConnection().then((i)=>{
    console.log("working");
}).catch((err)=>{
    process.exit(1);
})

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:true, credentials:true}));
app.use(express.json());


app.use("/",routes);

module.exports = app;