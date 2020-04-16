const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    searches: [
        {
            name: String,
            id: String,
        },
    ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
