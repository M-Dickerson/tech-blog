const router = require('express').Router();
const { User } = require('../models');

router.get('/homepage', async (req, res) => {
  res.render('home');
}); 
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;