module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "lu13edu4rd0",
    DB: "mv_monitev",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };