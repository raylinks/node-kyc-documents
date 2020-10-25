const  {User} = require('../models')
const fs = require('fs');
const path = require('path');

module.exports = {
     async register(req,res){
         try{

            const user = await User.create(req.body);
            
    
            return res.status(201).json({
                data:user,
            
                message:"Registration is Successful"
               });
             
          }catch(errors){
            console.log(errors);
                 //res.status(400).send({
                   //error:' this email address is already in use'  
           //  })
          }
        }
    }
     
