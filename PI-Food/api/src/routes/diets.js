var express = require('express');
var router = express.Router();
const { Recipe } = require('../db');

const endpoint = '/diets/';

router.get(endpoint, function (req, res, next) {
    const diets = Recipe.findAll();
    if (diets)
        res.send(diets);
    else
        res.status(404).send({ error: 'no existe ninguna dieta' });
});


module.exports = router;