const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Character', {
    code: {
      type: Sequelize.STRING(5),
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER
    },
    race: {
      type: Sequelize.ENUM,
      values: ['Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'],
      defaultValue: 'Other',
    },
    hp: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    mana: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    dateAdded: {
      type: Sequelize.DATEONLY
    }
  }, {
    timestamps: false
  });

}