var express = require('express');
var router = express.Router();
var dataSource = require('../services/dataSource');

router.get('/', async function (req, res, next) {
    try {
        var result = await dataSource.getStudents(req.query.page);
        res.send(result);
    } catch (err) {
        console.error(`Error while getting students list `, err.message);
        next(err);
    }
});

module.exports = router;