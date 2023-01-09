const { User } = require('../models');

const userData = [
  {
    username: 'sleepypanda',
    password: 'test'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;