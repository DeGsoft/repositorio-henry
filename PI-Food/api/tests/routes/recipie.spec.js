/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {

    const endpoint = '/recipes';

    it('should get 200', () =>
      agent.get(endpoint).expect(200)
    );

    it('Should get array', async () => {
      const response = await agent.get(endpoint)
      expect(response.body).to.be.an('array');
    });

    it('should get 404', async () =>
      await agent.get(endpoint + '/$#@!').expect(404)
    );

    const id = '1';
    const name = 'name';
    it('should get by id', async () =>
      await agent.get(endpoint + '/' + id)
      .expect(200)
      .expect(response.body.name).equal(name)
    );

  });
});
