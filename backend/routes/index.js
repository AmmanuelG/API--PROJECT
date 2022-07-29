
const express = require('express');
const router = express.Router();
//utils/auth.js
const { setTokenCookie } = require('../utils/auth');
const { User } = require('../db/models');

const apiRouter = require('./api');
router.use('/api', apiRouter);




// router.get('/hello/world', function(req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.send('Hello World!');
  
//   });

router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  console.log(csrfToken)
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});
  

router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
});





  module.exports = router;