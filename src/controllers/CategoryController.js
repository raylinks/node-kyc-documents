const  {KycDocumentType, KycCategory} = require('../models')
//const uuidv1 = require('uuid/v1');
const  multer = require('multer');
const fs = require('fs');
const path = require('path');

module.exports = {
     async index(req,res){
         try{
             const categories = await KycCategory.findAll({ include: KycDocumentType });
             console.log(categories);
         res.status(200).json(card);
         }catch(err){
             console.log(err);
         }
    },
}

