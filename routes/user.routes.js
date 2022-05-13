module.exports = app => {
  const users = require("../controllers/user.controller");

  let router = require("express").Router();

  // Create new article
  router.post("/", users.create);

  // Search all Users by original_title
  // TODO Implement this route
  // router.get("/", users.findAllBySearch);

  // Retrieve all Users
  router.get("/all", users.findAll);

  // Retrieve single User by ID
  router.get("/:id", users.findOne);

  // Update Single User
  router.put("/:id", users.update);

  // delete Single User
  router.delete("/:id", users.delete);

  // Set articles for user
  router.put("/:id/setArticle", users.setUserArticle)

  // delete article for user
  router.delete("/:id/deleteArticle", users.deleteUserArticle)

  app.use('/api/users', router);
};