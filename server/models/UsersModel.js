import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
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
    isBanned: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },    
    aboutMe: {
        type: String,
        default: "No Information",
    },
    savedPapers: [{paperID: Object, title: String, authors: String, category: String}],

    ratings: [{paperID: Object,rate: Number}],

    notifications: [String],

    picture: {
        type: String,
        default: "",
    },
})

export default mongoose.model("User", UserSchema)