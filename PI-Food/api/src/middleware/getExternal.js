const {Recipie, Diet} = require('../db.js')
const uri = 'https://api.spoonacular.com/recipes';

const getApiRecipies = () => {
    return fetch(uri)
        .then(response => response.json())
        .then(data =>
            Recipe.create(data))
        .catch(err => {
            console.error('Error:', err);
        });
};

const getFromDb = async () => {
    return await Recipie.findAll(
        {
            include: {
                model: Diet,
            }
        })
}

const getAllRecipies = async () => {
    const fromApi = await getApiRecipies();
    const fromDb = await getFromDb();
    return fromApi.concat(fromDb);
}

module.exports = {
    getAllRecipies
};