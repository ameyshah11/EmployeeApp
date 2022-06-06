// Importing express library to create server.
// variable and method name : camelCase.
// Class Name : Start with capital
// Don't give unecessary spaces.
const express = require("express");

/* Here we are making a functional call,
whatever the return it is going to give we
are going to get it for app*/
const app=express()

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