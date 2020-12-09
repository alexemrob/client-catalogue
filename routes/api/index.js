const router = require("express").Router();
const clientsRoutes = require("./clients");
const checkoutRoutes = require("./checkout");

router.use("/clients", clientsRoutes);
router.use("/checkout", checkoutRoutes);

module.exports = router;