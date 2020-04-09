const router = require("express").Router();

// GET - /api/user
router.get("/", function(req, res){
  res.send("This is the user route")
})

module.exports = router;
