const { Post } = require('../models');

const postData = [
  {
    title: 'Sushi',
    content: 'Sushi is really great',
    user_id: 1
    
  },
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;