'use strict';
const { Model}  = require('sequelize');
module.exports = (sequelize, DataTypes) => {
         const kycDocument = sequelize.define('KycDocument',{
        uuid:DataTypes.STRING,
        document: DataTypes.STRING,
        verified_at:DataTypes.INTEGER,
        attended_to:DataTypes.INTEGER,
        notes:DataTypes.STRING
    });
    return kycDocument;
};


