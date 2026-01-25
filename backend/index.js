const express = require('express');
const routes = require("./Routes/routes.js");
const setDbConnection = require("./Models/database.js")
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

setDbConnection().then((i)=>{
}).catch((err)=>{
    process.exit(1);
})


app.use(cors({origin:true, credentials:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use("/",routes);



module.exports = app;