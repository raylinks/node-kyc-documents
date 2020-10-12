'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('KycDocumentTypes', [
      {
      name : 'International Passport',
      slug : 'international_passport',
      KycCategoryId : '3',
      createdAt : new Date(),
      updatedAt : new Date(),
      },
      {
      name : 'National ID Card',
      slug : 'national_id_card',
      KycCategoryId : 3,
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      {
      name : 'Voters Card',
      slug : 'voters_card',
      KycCategoryId : 3,
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      {
      name : 'Driver Licence',
      slug : 'driver_licence',
      KycCategoryId : '3',
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      {
      name : 'Electricity Bill',
      slug : 'electricity_bill',
      KycCategoryId : 3,
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      {
      name : 'Water Bill',
      slug : 'water_bill',
      KycCategoryId : 4,
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      {
      name : 'Internet Bill',
      slug : 'internet_bill',
      KycCategoryId : 4,
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      {
      name : 'Waste Bill',
      slug : 'waste_bill',
      KycCategoryId : 4,
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      {
      name : 'NIN',
      slug : 'nin',
      KycCategoryId : 3,
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      {
      name : 'Bank Statement',
      slug : 'bank_statement',
      KycCategoryId : 4,
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      
      ], {});
  },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
