module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    is_owner: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    is_client: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    last_login: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW, /* Review if this works */
    }
  });
  return User;
} 