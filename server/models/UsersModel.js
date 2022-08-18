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
    myPapers: [{paperID: Number, title: String, authors: String}],

    savedPapers: [{paperID: Number, title: String, authors: String}],
})

export default mongoose.model("User", UserSchema)