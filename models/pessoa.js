module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define(
    "Pessoa",
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Cpf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Telefone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "pessoas",
      timestamps: false,
    }
  );

  return Pessoa;
};
