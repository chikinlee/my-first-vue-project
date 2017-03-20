/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
user_name: {
  type: DataTypes.CHAR(50),
    allowNull: true
},
password: {
  type: DataTypes.CHAR(32),
    allowNull: true
}
}, {
  tableName: 'user'
});
};
