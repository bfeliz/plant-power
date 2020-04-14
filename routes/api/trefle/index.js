const router = require("express").Router();
const axios = require("axios");

// GET - /api/trefle/all
router.get("/all/:searchterm", function (req, res) {
    const { searchterm } = req.params;
    axios
        .get(
            "https://trefle.io/api/plants?token=" +
                process.env.TREFLE_API_KEY +
                "&complete_data=true&page_size=10&page=1&q=" +
                searchterm
        )
        .then(function (data) {
            res.json(data.data);
        });
});

// GET - /api/trefle/:id
router.get("/:id", function (req, res) {
    const { id } = req.params;
    console.log(id);
    axios
        .get(
            "https://trefle.io/api/plants/" +
                id +
                "?token=" +
                process.env.TREFLE_API_KEY
        )
        .then(function (data) {
            res.json(data.data);
        });
});

module.exports = router;
