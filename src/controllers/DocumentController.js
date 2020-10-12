const  {Card, Card_currency,Rate_variation} = require('../models')
const uuidv1 = require('uuid/v1');
const  multer = require('multer');
const fs = require('fs');
const path = require('path');

module.exports = {
     async create(req,res){
         try{
             






             console.log("baby");
           const myFile = req.file;
                console.log(myFile);
             const imageUrl = await gcsUpload(myFile)
            req.body['uuid'] = uuidv1();
           req.body['picture'] = myFile.originalname
         const card =  await Card.create(req.body);
         res.status(200).json(card);
         }catch(err){
             console.log(err);
         }
    },
}

