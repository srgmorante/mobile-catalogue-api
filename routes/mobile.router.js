'use strict'

var express=require('express');

var mobileController=require('../controllers/mobile.controller');



var api= express.Router();


api.get('/:id', mobileController.getMobile);
api.get('/', mobileController.getMobiles);

module.exports=api;