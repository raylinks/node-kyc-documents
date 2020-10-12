'use strict';
const { Model}  = require('sequelize');
module.exports = (sequelize, DataTypes) => {
         const kycCategory = sequelize.define('KycCategory',{
        uuid:DataTypes.STRING,
        name: DataTypes.STRING,
        requires_upload:DataTypes.INTEGER,
        slug:DataTypes.STRING,
        one_time_limit:DataTypes.FLOAT,
        daily_limit:DataTypes.FLOAT,
        rank:DataTypes.INTEGER
    });

       kycCategory.associate = function(models){
        kycCategory.hasMany(models.KycDocumentType);
    }

    return kycCategory;
};


