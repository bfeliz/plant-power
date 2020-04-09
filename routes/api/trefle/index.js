const router = require("express").Router();
const axios = require("axios");

// GET - /api/trefle/all
router.get("/all", function (req, res) {
  axios
    .get("https://trefle.io/api/plants?token=" + process.env.TREFLE_API_KEY)
    .then(function (data) {
      res.json(data.data);
    });
});

// GET - /api/trefle/:id
router.get("/:id", function (req, res) {
  const { id } = req.params;
  axios
    .get("https://trefle.io/api/plants?token=" + process.env.TREFLE_API_KEY)
    .then(function (data) {
      res.json(data.data);
    });
});

module.exports = router;
