require("dotenv").config({path : "./.env"});
const express = require("express");
const app = express();

// logger
const logger = require("morgan");
app.use(logger("tiny"));

// routes
app.get("/",require("./routes/indexRouters"));

const ErrorHandler = require("./utils/ErrorHandler")
const {genetatedErrors} = require("./middlerwares/Errors")
// error handling 


app.all("*", (req,res,next)=>{
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404));
  })    
  
app.use(genetatedErrors)

app.listen(process.env.PORT, console.log(`server is running on port ${process.env.PORT}`));