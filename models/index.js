const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'username',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    foreignKey: 'username',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'username',
});

Comment.belongsTo(User, {
    foreignKey: 'username',
});

Comment.belongsTo(Post, {
  foreignKey: 'postId',
})

module.exports = { User, Post, Comment };