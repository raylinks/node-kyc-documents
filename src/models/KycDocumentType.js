'use strict';
const { Model}  = require('sequelize');
module.exports = (sequelize, DataTypes) => {
         const kycDocumentType = sequelize.define('KycDocumentType',{
        uuid:DataTypes.STRING,
        name: DataTypes.STRING,
        slug:DataTypes.STRING
    });
        kycDocumentType.associate = function(models){
        kycDocumentType.hasMany(models.KycDocument);
      };  
    return kycDocumentType;
};