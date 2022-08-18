import mongoose from 'mongoose';

const PaperSchema = new mongoose.Schema({
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
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    userID: {
        type: Object,
        required: true
    },
    reviews: [{userID: Object, date: Date, username: String, comment: String}],
})

export default mongoose.model("Paper", PaperSchema)