const router = require("express").Router();
const clientsController = require("../../controllers/clientsController");

// Matches with "/api/clients"
//Get a list of all clientss
router.get('/', clientsController.getAllClients);

//Create a new clients
router.post('/', clientsController.createNewClients);

//Get a clients by id
router.get('/:id', clientsController.findClientsById);

//Update a clients by id
router.put('/:id', clientsController.updateClients);

//Delete a clients by id
router.delete('/:id', clientsController.deleteClients);

module.exports = router;