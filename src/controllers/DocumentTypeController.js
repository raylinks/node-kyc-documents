const  {KycDocumentType, KycCategory} = require('../models')
//const uuidv1 = require('uuid/v1');
const  multer = require('multer');
const fs = require('fs');
const path = require('path');

module.exports = {
     async index(req,res){
         try{
             const categories = await KycDocumentType.findAll({ include: KycCategory });
             console.log(categories);
         }catch(err){ 
             console.log(err);
         }
    },

     async show(req,res){
         try{
             const show = await KycDocumentType.findOne({
                where: {slug: req.params.slug} 
                });
             console.log(show);
         }catch(err){
             console.log(err);
         }
    },
}

