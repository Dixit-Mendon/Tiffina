import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.Password)
}

userSchema.pre("save", async function (next) {
    if (!this.isModified("Password")) {
        next();
    }
    const salt = await bcryptjs.genSalt(10);
    this.Password = await bcryptjs.hash(this.Password, salt);
})

const User = mongoose.model('User', userSchema);

export default User;