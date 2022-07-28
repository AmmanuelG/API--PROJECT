const router = require('express').Router();


router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
    console.log('testing')
  });


module.exports = router;