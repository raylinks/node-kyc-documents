const  {User} = require('../models')
//const uuidv1 = require('uuid/v1');
const fs = require('fs');
const path = require('path');

module.exports = {
     async login(req,res){
         try{
    if(!req.body.email){
        res.status(422).json({success: false, msg: ' email Field  required'});
    }else if(!req.body.password){ 
        res.status(422).json({success: false, msg: 'your password Field required'})
        } 
    } 
} 
