var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/webhook', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/v1/webhook',
  function (req, res, next) {
        console.log(req.body.text);
        console.log(req.headers);
        res.end();
});
  
module.exports = router;
