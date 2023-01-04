const { User } = require('../models');

const userData = [
  {
    username: 'mdickerson',
    password: 'test1'
    
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;