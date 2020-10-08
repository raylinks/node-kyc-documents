'use strict';
const { Model}  = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  //  class Classroom extends Model {
         const card = sequelize.define('Card',{
        uuid:DataTypes.STRING,
        name: DataTypes.STRING,
        type:DataTypes.STRING,
        picture:DataTypes.STRING,
        information:DataTypes.STRING

    });

   // } 
    return card;
};


