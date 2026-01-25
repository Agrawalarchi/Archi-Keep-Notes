const express = require('express');
const routes = require("./Routes/routes.js");
const setDbConnection = require("./Models/database.js")
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();


app.use(cors({origin:true, credentials:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());


setDbConnection().then((i)=>{
   app.listen(8080, ()=>{
     console.log("database connected server is listening");
   });
}).catch((err)=>{
    console.log(err);
    process.exit(1);
})


app.use("/",routes);

module.exports = app;