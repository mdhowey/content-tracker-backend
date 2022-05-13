// require local dependencies
const dbConfig = require("../config/db.config");

// require Sequelize
const Sequelize = require("sequelize");

// instantiate new instance of sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "postgres",
  // Prints out a massive object of DB meta data
  // logging: (...msg) => console.log(msg),
  // pool allows for multiple connection through the same route over a defined amount of time
  // i.e.- 3 users want to create a new article within the time defined by idle
  // a single connection is opened and used for all three users
  pool: dbConfig.pool,
});

// create DB object for export
const db = {};

// add Sequelize to DB object
db.Sequelize = Sequelize;

// add sequelize to DB object
db.sequelize = sequelize;

// require DB models
db.articles = require("./article.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);

//Establishing many-to-many relationship
// TODO Look into establishing many-to-many and finding join table
db.articles.belongsToMany(db.users, {
  through: "user_article",
  as: "users",
  // foreignKey: "articles_id"
});

db.users.belongsToMany(db.articles, {
  through: "user_article",
  as: "articles",
  // foreignKey: "users_id"
});

module.exports = db;