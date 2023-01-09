const { Post } = require('../models');

const postData = [
  {
    title: 'Did you know? Sushi has health benefits!',
    content: 'Sushi is an awesome source of omega-3 fatty acids (heart-healthy fat). Nori (seaweed) provides iodine (boosts thyroid health), and is a good source of vitamin A – vital to a healthy immune system and skin',
    user_id: 1
  },
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;