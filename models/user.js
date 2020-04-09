const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: "Username is required",
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },

    password: {
        type: String,
        required: "Password is required",
        unique: true,
        match: [/.+{6,*}/, "Password doesnt meat requirements"],
    },
});

const user = mongoose.model("User", UserSchema);

module.exports = user;
