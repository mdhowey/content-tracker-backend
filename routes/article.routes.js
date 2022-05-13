module.exports = app => {
  const articles = require("../controllers/article.controller");

  let router = require("express").Router();

  // Create new article
  router.post("/", articles.create);

  // Search all Articles by original_title
  router.get("/", articles.findAllBySearch);

  // Search all Articles by User
  router.get("/byUser/:contributor", articles.findAllByUser);

  // Retrieve all Articles
  router.get("/all", articles.findAll); 

  // Retrieve single Article by ID
  router.get("/:id", articles.findOne);

  // Update Single Article
  router.put("/:id", articles.update);

  // delete Single Article
  router.delete("/:id", articles.delete);

  // set user for article
  // TODO Debug this route
  router.put("/:id/:userId/setUser", articles.setArticleUser)

  // delete user for article
  router.delete("/:id/deleteUser", articles.deleteArticleUser)

  app.use('/api/articles', router);
};