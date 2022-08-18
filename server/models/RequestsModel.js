import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
     },
    date: {
        type: Date,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    abstract: {
        type: String,
        required: true,
    },
    userID: {
        type: Object,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
})

export default mongoose.model("Request", RequestSchema)