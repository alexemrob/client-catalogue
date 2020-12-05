const router = require("express").Router();
const clientsRoutes = require("./clients");

// Book routes
router.use("/clients", clientsRoutes);

module.exports = router;