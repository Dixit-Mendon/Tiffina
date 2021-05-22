import mongoose from 'mongoose';

const listSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }
});

const List = mongoose.model('List', listSchema);

export default List;