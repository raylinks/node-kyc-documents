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
    await queryInterface.bulkInsert('KycCategories', [{
      name : 'Email Verification',
      slug : 'email_verification',
      requires_upload : '0',
      one_time_limit : '5000.00',
      daily_limit : '1000.00',
      rank : '0',
      createdAt : new Date(),
      updatedAt : new Date(),
  
    },
      {
      name : 'BVN Update',
      slug : 'bvn_update',
      requires_upload : '0',
      one_time_limit : '20000.00',
      daily_limit : '4000.00',
      rank : '1',
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      {
      name : 'Government Issued ID',
      slug : 'government_issued_id',
      requires_upload : '0',
      one_time_limit : '60000.00',
      daily_limit : '10000.00',
      rank : '1',
      createdAt : new Date(),
      updatedAt : new Date(), 
      },
      {
      name : 'Utility Bill',
      slug : 'utility_bill',
      requires_upload : '1',
      one_time_limit : '100000.00',
      daily_limit : '14000.00',
      rank : '1',
      createdAt : new Date(),
      updatedAt : new Date(), 
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('KycCategory', null, {});
     */
     await queryInterface.bulkDelete('KycCategory', null, {});
  }
};
