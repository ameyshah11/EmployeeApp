const mongoose = require("mongoose");

// We are going to structure what kind of data to be pushed into DB here.
/*We have a class constructor called schema, 
in this constuctor we are going to throw a obj in curly brackets*/
const employeeSchema = new mongoose.Schema({
    empName:{
        type:String,
        required:true // empName cannot be empty restriction
    },
    empEmail:{
        type:String,
        required : true
    },
    empMobile:{
        type:String,
        required : true
    }
});

/*Here we are exporting the model module to mongoose 
and from that model we are sending the return as kind of module

module.exportes we are using it so that we can use that model anywhere*/

// and make the E of employee capital so database name will be Employee
// As here we have named it as Employee but in DB it will be employees (plural form)
// because in database we will have multiple records.
// and 2nd parameter is schema name which we have created above
module.exports = mongoose.model('Employee',employeeSchema);