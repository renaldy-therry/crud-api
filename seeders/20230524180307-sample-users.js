'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return await queryInterface.bulkInsert(
    "Users",
    [
      {
        firstName: "Kobe",
        lastName: "Bryant",
        email: "kobe@mamba.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        password : "sxyz213@",
      },
      {
        firstName: "John",
        lastName: "Bryant",
        email: "john@mamba.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        password : "12345",
      },
    ],
    {}
   );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
