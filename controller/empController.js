// We are going to require the module from mongoose.module
// and require mongoose as well
// mongoose and model we are going to use it for querying again here.

// we have imported the mongsoose module
// Through the mongoose module only we are going to say that 
// this are the details we are going to share it with you
const Emp = require('../model/emp');
const mongoose = require("mongoose");


// Create Function
function create(req,res)
{
    // On body we are requesting empName and assigning it to employeeName
    // and storing it in mongo databse using mongoose
    let employeeName = req.body.empName;
    let employeeEmail = req.body.empEmail;
    let employeeMobile = req.body.empMobile;

    // Emp is constructor which we have create above as const Emp
    // and passing object into it
    let objEmp = new Emp({
        // empName : coming from schema structure the actual one which will be in DB (model file)
        // employeeName : coming from let employeeName of this controller file req.body.empName

        // Fact :
        // when we have key and value with the same identities we dont have to give colon :
        // we can write only name one time EX: employeeName
        // But in our model we have empName and in controller employeeName
        empName : employeeName,
        empEmail : employeeEmail,
        empMobile : employeeMobile
    })

    // .save is used to save the details in database

    objEmp.save()
    // this time we are getting data as response
    // because once the .save method get's executed it will return a value called data
    // that data we are going to capture using .then and we are going to call it as a parameter
    // and using  a lambda function we are going to print the data as a kind of a response.

    .then((data)=>
        res.send(data)
    ).catch((err) =>
        // we don't want to show the error to the user so we are using console
        // so the error will be printed on the terminal
        console.log(err)
    )
}

// Read function
function read(req,res)
{
    Emp.find({})
    .then((data) => res.send(data))
}

// Update function

function update(req,res)
{
    // params is a shortcut for parameter
    // Ex : localhost:5000/emp/user/123 (so here 123 is a parameter)
    // here we are fetching the id and will do the update process on that id
    // Here we are reading the id from the URL itself instead from body

    //Here parameter
    //1. req.params.id => to get read the id
    //2. req.body => we are getting the complete body object and updating it
    //3. it is a call back function with error and emp obj

    //findByIdAndUpdate is taking the body and it is updating it
    Emp.findByIdAndUpdate(req.params.id,req.body, (err,emp)=>{
        if(err)
        {
            // Status is a function which returns the status code like 200,400,404 etc

            // Below is a chainable function in which we write function after another function
            // as here status is a function and after that we are writing send function.
            // this are built in chaninable function we can also create our own customize chainable func.

            return res.status(500).send({
                // in Send we are sending an object
                // object is not mandatory
                // Generally whatever the messages we send to the front end is send in a 
                // format of arrays and object (array of objects)
                // If we have only one single document to send we send it through object
                // When we have multiple documents to send we send it throygh array of objects

                // This message is for user
                message:"Not able to Update the employee details",
                // This message is for developer on front end
                error : err
            })
        }

        // If everything goes well 

        res.status(200).send({
                // This message is for user
                message:"Successfully Updated the employee details"
        })
    })
}

function deleteEmployee(req,res)
{
    // For delete we have two options
    // deleteOne
    // findByIdAndDelete :- by default it recognise that it has to delete the data on the basis of ID
    
    // req is a object
    Emp.findByIdAndDelete(req.params.id,(err,emp) => {
        if(err)
        {
            return res.status(500).send({
                message:"Not able to delete the employee details",
                error : err
            })
        }

        res.status(200).send({
            message:"Record deleted successfully"
        })
    })
}

// Read By ID function

// function readById(req,res)
// {
//     Emp.findOne({
//         _id:req.body.id
//     })
// }

// To use this above function as callback in route we have to export it as a module
// here we are exporting function definition as a parameter we are not goin to execute it
// and then will import this into emproutes

// earlier method to export
// module.exports.create = create;
// module.exports.read = read;

// New method to export

module.exports = {create,read,update,deleteEmployee}