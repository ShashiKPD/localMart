import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        reqired: true,
        trim: true,
        min: 3,
        max: 12
    },
    lastname: {
        type: String,
        reqired: true,
        trim: true,
        min: 3,
        max: 12
    },
    email: {
        type: String,
        reqired: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        reqired: true,
        min: 3
    },
});

const user = mongoose.model('user', userSchema);

export default user;