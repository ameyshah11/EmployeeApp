/*
App Name : Employee Crud App
Author : Amey Shah
Description : This is a simple employee app which performs CRUD operation
              like 
              1. Creating a new employee
              2. Reading all employee details
              3. Updating employee details based on ID which is been passed as a parameter in URL
              4. Deleting employee details based on ID which is been passed as a parameter in URL
*/


// Importing express library to create server.
// variable and method name : camelCase.
// Class Name : Start with capital
// Don't give unecessary spaces.
const express = require("express");

const mongoose = require("mongoose");
/* Here we are making a functional call,
whatever the return it is going to give we
are going to get it for const app*/
const app=express()

// Importing all the routes from routes folder/ emproutes file
const router = require("./routes/emproutes");

// app.use is express function
// the routes file is different and we have using it after importing
// so now app.use is acting like a middleware 
// so now in router the url part was create and we have added one more parameter in url as emp
// so now actual URL will
// localhost:5000/emp/create
app.use('/emp',router);

//app.get("/user",function (req,res) // this is normal writing method below is lamba
app.get("/user",(req,res)=>
{
    /*send is a property of res 
    it's like functional constructor inside functional constructor */
    res.send("First API Call")
})

/*After deploying the app this is the first method 
which listens to all the API calls/ URLS
through the port numbers to connect to the server
from the front end through the API

normal open ports : 3000 & 5000 etc.*/

const port = 5000;

app.listen(port,(req,res)=>{

    // `` known as template literals
    // ${} we use for concationation instead of + sign it's a new way
    console.log(`Staring the application on port : http://localhost:${port}`)
})

// To connect to DB
// It expects two parameter 1. Connection string 2. Callback function

const mongodburl = "mongodb+srv://ameyshah11:amey123@cluster0.utzxr.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongodburl)
.then(()=>{
    console.log("Database Connection Established!");
})
.catch((err)=>{
    console.log(err);
})
/*if you get connection error 
1. check for password 
2. go to collection->network access -> edit -> allow access from anywhere */