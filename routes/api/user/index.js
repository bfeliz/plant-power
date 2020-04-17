const router = require("express").Router();
const UserCollection = require("../../../models/user");
const authRoute = require("../../../utils/auth0");

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
