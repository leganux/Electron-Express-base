var express = require('express');
var router = express.Router()
var assets = require('./../config/assets.config')

router.get('/', function (req, res) {
    res.render('start', {
        resources: assets.cp,
    })
});
router.get('/panel', function (req, res) {
    res.render('panel', {
        resources: assets.cp,
    })
});

router.get('/products', function (req, res) {
    res.render('products', {
        resources: assets.cp,
    })
});
router.get('/containers', function (req, res) {
    res.render('containers', {
        resources: assets.cp,
    })
});

router.get('/ajuste', function (req, res) {
    res.render('ajuste', {
        resources: assets.cp,
    })
});
router.get('/kits', function (req, res) {
    res.render('kits', {
        resources: assets.cp,
    })
});
router.get('/orders', function (req, res) {
    res.render('orders', {
        resources: assets.cp,
    })
});

router.get('/send', function (req, res) {
    res.render('send', {
        resources: assets.cp,
    })
});
router.get('/guide', function (req, res) {
    res.render('guide', {
        resources: assets.cp,
    })
});

router.get('/historic', function (req, res) {
    res.render('historic', {
        resources: assets.cp,
    })
});
router.get('/pos', function (req, res) {
    res.render('pos', {
        resources: assets.cp,
    })
});

router.get('/embeded', function (req, res) {
    res.render('embeded', {
        resources: assets.cp,
    })
});

module.exports = router;