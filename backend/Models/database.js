const mongoose = require('mongoose');
require('dotenv').config();


const setDbConnection=async()=>{
  try{
      await mongoose.connect(process.env.MONGODBURL);
  }
  catch(err){
      throw err;
  }
}


module.exports = setDbConnection;
