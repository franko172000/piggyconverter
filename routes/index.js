var express = require('express');
var request = require('request');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    const currencies = fs.readFileSync(path.resolve('public/json/currencies.json'));
    let curList = JSON.parse(currencies);
  res.render('index', { title: 'Express', currencyList: curList});
});

module.exports = router;
