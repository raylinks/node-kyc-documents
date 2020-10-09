'use strict';
const { Model}  = require('sequelize');
module.exports = (sequelize, DataTypes) => {
         const userData = sequelize.define('User',{
        uuid:DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        verified_at:DataTypes.INTEGER
    });
        userData.associate = function(models){
        userData.hasMany(models.KycDocument);
};
    return userData;
};


