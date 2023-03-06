module.exports = (sequelize, Sequelize) => {
    const Nservice = sequelize.define("nservice", {
      User_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      User_Name: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.STRING
      },
      Punch_In: {
        type: Sequelize.STRING
      },
      Punch_Out: {
        type: Sequelize.STRING
      },
    });
    return Nservice;
  };