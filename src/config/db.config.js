module.exports = {
    HOST: 'localhost',
    USER: "neste",
    PASSWORD: "tapioca",
    DB: "keyense_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };