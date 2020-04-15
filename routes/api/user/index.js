const router = require("express").Router();
const UserCollection = require("../../../models/user");
const authRoute = require("../../../utils/auth0");

// GET - /api/user
router.get("/api/user", authRoute, async function (req, res) {
    const userData = {
        auth0_id: req.user.sub,
    };
    let user = await UserCollection.findOne(userData);
    if (!user) {
        res.send(UserCollection.create(userData));
    } else {
        res.send(user);
    }
});

router.put("/api/user", authRoute, (req, res) => {
    let user = UserCollection.findOne({ auth0_id: req.user.sub });
    // add one search to saved searches
    user.search.push(res.user.search);
    // update all searches at will
    //user.searches = res.user.searches;
    user.save();
});

module.exports = router;
