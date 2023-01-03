var express = require('express');
var router = express.Router();
const { Recipe } = require('../db');
const { getAllRecipies } = require('../middleware/getDb.js')

const endpoint = '/recipes/';
const errPost = 'Error data provided';
/* GET users listing. */
/*
[ ] GET /recipes?name='...':
Obtener un listado de las recetas que contengan la palabra 
ingresada como query parameter
Si no existe ninguna receta mostrar un mensaje adecuado
*/
router.get(endpoint, async function (req, res, next) {
    const { name } = req.query;
    const condition = { where: { name } };
    await getAllRecipies();
    const recipes = Recipe.findAll(
        condition
    );
    if (recipes)
        res.send(recipes);
    else
        res.status(404).send({ error: 'no existe ninguna receta con ese id' });
});

/*
[ ] GET /recipes/{idReceta}:
Obtener el detalle de una receta en particular
Debe traer solo los datos pedidos en la ruta de detalle 
de receta
Incluir los tipos de dieta asociados
*/
router.get(endpoint + ':idReceta', function (req, res, next) {
    const { idReceta } = rq.params;
    const recipe = Recipe.findByPk(idReceta);
        res.send(recipe || 'Recipe not found');
});

/*
[ ] POST /recipes:
Recibe los datos recolectados desde el formulario 
controlado de la ruta de creación de recetas por body
Crea una receta en la base de datos relacionada con sus 
tipos de dietas.
*/
const newRecipe = ({ title, contents }) => Recipe.create({ title, contents });

router.post(endpoint, function (req, res, next) {
    const { title, contents } = req.body
    if (title && contents) {
        res.send(newRecipe({ title, contents }));
    }
    else
        res.status(404).json(errPost);
});


module.exports = router;