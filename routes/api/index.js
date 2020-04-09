const router = require("express").Router();

router.use("/user", require("./user"));
router.use("/trefle", require("./trefle"));

module.exports = router;
