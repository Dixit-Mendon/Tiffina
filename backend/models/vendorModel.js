import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const vendorSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mobile: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

vendorSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.Password)
}

vendorSchema.pre("save", async function (next) {
    if (!this.isModified("Password")) {
        next()
    }
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.Password, salt)
})

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;