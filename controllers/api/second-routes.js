const router = require('express').Router();
const { User, Post, Comment } = require('/Users/Morga/bootcamp/challenges/tech-blog/models');
const bcrypt = require('bcrypt');


router.get('/login', (req,res) => {
  res.send("Welcome to the login page")
})

// Opening a session upon successful login.
router.post('/', async (req, res) => {
  try {
    const loginInfo = await User.create(req.body);

    req.session.save(() => {
      req.session.username = loginInfo.username;
      req.session.password = loginInfo.password;
      req.session.loggedIn = true;

      res.status(200).json(loginInfo);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});



// Initial login attempt. Verifying username and password against DB.
router.post('/login', async (req, res) => {
  try {
    const loginInfo = await User.findOne({
      where: { username: req.body.username },
    });
    if (!loginInfo) {
      res
        .status(404)
        .json({ message: 'Sorry! Login failed. Please try again!' });
      return;
    }
    const userPassword = await bcrypt.compare(
      req.body.password,
      loginInfo.password
    );
    if (!userPassword) {
      res
        .status(404)
        .json({ message: 'Sorry! Login failed. Please try again!' });
      return;
    }
    restore.status(200).json({ message: 'Welcome in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/dashboard', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      bodyText: req.body.content,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a post based upon ID while logged into dashboard.
router.put('/dashboard/:id', async (req, res) => {
  try {
    const updatedPost = await Post.update(
      {
        title: req.body.title,
        bodyText: req.body.bodyText,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updatedPost) {
      res.status(404).json({ message: 'Post Not Found' });
      return;
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a post while in dashboard
router.delete('/dashboard/:id', async (req, res) => {
try {
  const deletedPost = await Post.destroy({
    where: { id: req.params.id },
  });
  if (!deletedPost) {
    res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json(tag);
} catch (err) {
  res.status(500).send(err);
}
});

module.exports = router;