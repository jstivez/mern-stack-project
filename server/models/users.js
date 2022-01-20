import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userNumber: Number,
    name: String,
    section: {
        type: String,
        default: 'New User'
    },
    subjects:[String]
});

const user = mongoose.model('user', userSchema);

export default user;
