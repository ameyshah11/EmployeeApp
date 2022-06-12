const express = require("express");

// Here we are importing create function from emp controller which we have exported in that file

// earlier method to import controller
// const create = require("../controller/empController");
// const read = require('../controller/empController');

// New method to import controller

const Controller = require('../controller/empController');

// We need body parsert to check wether we are sending json, xml what kind of data
const bodyParser = require("body-parser");

/* we can name it anything just for understanding we have
written variable as router*/
var router = express();

// .use is a express function which is used when we want to use any middleware or our own file
// and we are saying to bodyparser that the data i will be sending after hitting the API url
// that data will be in a json format
router.use(bodyParser.json());

// here we are routing create function 
// first parameter '/create' is a url part (EX: localhost:5000/create)
// second parameter is a create function which we have imported above from controller file
// which will perform the logic for create process

//Earlier method for routing
// router.post('/create',create.create);
// router.get('/users',read.read);

// New method for routing

router.post('/create',Controller.create); // post => for posting or sending data
router.get('/users',Controller.read); // get => for reading data
// Here for updating we have to send the id for that will use colon : and use that as a param
router.put('/update/:id',Controller.update); // put => for updating data
router.delete('/delete/:id',Controller.deleteEmployee); // delete => for deleting record
// we are exporting router as a module because it is seperate file
//so all files can access it now
// As index is our mail file which will be working and all controller and model are in supporting role
// so now we will import this router in index.js file so it can access all the routes.
module.exports = router;