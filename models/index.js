const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade",
});
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade",
});
// post
User.hasMany(Post, {
    foreignKey: 'user_id',
});
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade",
});
// comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade",
});
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade",
})

module.exports = { User, Post, Comment };