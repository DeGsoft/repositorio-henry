const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Role', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: Sequelize.STRING
    }
  });
}