const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');

const user = "postgres";
const password = "P@ssw0rd";
const host = "localhost";
const port = "5432";
const db = new Sequelize(`postgres://${user}:${password}@${host}:${port}/henry_sequelize`, {
  logging: false,
});

modelCharacter(db);
modelAbility(db);
modelRole(db);

module.exports = {
  ...db.models,
  db,
  Op
}