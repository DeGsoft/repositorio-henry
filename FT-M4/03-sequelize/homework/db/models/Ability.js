const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    },
    manaCost: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  }, {
    indexes: [{
      unique: true,
      fields: ['name', 'manaCost']
    }]
  });
}