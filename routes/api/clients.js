const router = require("express").Router();
const clientsController = require("../../controllers/clientsController");

// Matches "/api/clients"
router.route("/")
  .get(clientsController.findAll)
  .post(clientsController.create)
  .put(clientsController.update);

// Matches "/api/clients/:id"
router
  .route("/:id")
  .get(clientsController.findById)
  .put(clientsController.update)
  .delete(clientsController.remove)
  .post(clientsController.updateToday);

//Matches "api/clients/today"
router
  .route("/today")
  .get(clientsController.findAll)

module.exports = router;