const router = require("express").Router();
const clientsController = require("../../controllers/clientsController");

// Matches "/api/clients"
router.route("/")
  .get(clientsController.findAll)
  .post(clientsController.create)
  .put(clientsController.update);

router
  .route("/delete/:id")
  .delete(clientsController.unsave)

router
  .route("/saved/:id")
  .post(clientsController.add)

router
 .route("/saved2")
 .get(clientsController.getsaved)

 router
  .route("/:id")
  .get(clientsController.findById)
  .post(clientsController.updateEdit)
  .put(clientsController.update)
  .delete(clientsController.remove)


module.exports = router;