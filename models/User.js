const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
          },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            unique: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        address:{
            type: String,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema)