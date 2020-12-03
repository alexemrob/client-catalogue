const router = require("express").Router();
const clientsController = require("../../controllers/clientsController");

// Matches with "/api/books"
router.route("/")
  .get(clientsController.findAll)
  .post(clientsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(clientsController.findById)
  .put(clientsController.update)
  .delete(clientsController.remove);

module.exports = router;