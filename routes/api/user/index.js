const router = require("express").Router();
const UserCollection = require("../../../models/user");

// check if user is already in database, adds them if they are not
router.get("/:user", async function (req, res) {
    const { user } = req.params;
    const userData = {
        id: user,
    };
    let checkUser = await UserCollection.findOne(userData);
    if (!checkUser) {
        res.send(UserCollection.create(userData));
    } else {
        res.send(user);
    }
});

// on click of save button, finds specific user and adds to their saved collection
router.put("/:user", async function (req, res) {
    UserCollection.findOneAndUpdate(
        { id: req.params.user },
        { $push: { searches: req.body } },
        { new: true }
    )
        .then((dbSearches) => {
            res.json(dbSearches);
        })
        .catch((err) => {
            res.json(err);
        });
});

// finds specific user collection
router.get("/collection/:user", async function (req, res) {
    UserCollection.findOne({ id: req.params.user })
        .then((dbResults) => {
            res.json(dbResults);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;
