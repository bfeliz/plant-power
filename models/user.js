// Copy and paste your work, or start typing.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    auth0_id: {
        type: String,
        unique: true,
    },
    searches: {
        type: Array,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
yar;
