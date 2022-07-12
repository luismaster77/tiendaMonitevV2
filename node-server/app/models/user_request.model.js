module.exports = (sequelize, Sequelize) => {
    const UserRequest = sequelize.define("userRequests", {
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
    return UserRequest;
  };