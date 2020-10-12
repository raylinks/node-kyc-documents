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
            //  include:[
            //         {
            //             model: Song
            //         }
            //     ]
        // res.status(200).json(card);
         }catch(err){
             console.log(err);
         }
    },
}

