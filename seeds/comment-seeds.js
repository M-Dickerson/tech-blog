const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Yes! A reason to eat more sushi :)",
    user_id: 1,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;