const { Router } = require('express');
// Importar todos los routers;
const recipeRouter = require('./recipes.js');
const dietRouter = require('./require.js');

const router = Router();

// Configurar los routers
router.use('/recipes', recipeRouter);
router.use('/diets', dietRouter);


module.exports = router;
