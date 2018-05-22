'use strict';
// Import express and the controller file
var express=require('express');
var mobileController=require('../controllers/mobile.controller');

// Define the api variable from router express method
var api= express.Router();

// Create the get request and connect to the controller
api.get('/:id', mobileController.getMobile);
api.get('/', mobileController.getMobiles);

// Export the api
module.exports=api;