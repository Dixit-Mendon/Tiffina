import User from '../models/userModel.js';
import asyncHandler from "express-async-handler";

export const loginUser = asyncHandler(async (req, res) => {
    const { Username, Password } = req.body;

    const user = await User.findOne({ Username });
    if (user && (await user.matchPassword(Password))) {
        res.status(200).json({
            _id: user._id,
            name: user.Username,
            email: user.Email
        });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
});

export const registerUser = asyncHandler(async (req, res) => {
    const { Username, Email, Password, ConfirmPassword } = req.body;
    console.log(req.body);

    const userExists = await User.findOne({ $or: [{ Username: Username }, { Email: Email }] });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    if (Password === ConfirmPassword) {
        const user = await User.create({ Username, Email, Password });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.Username,
                email: user.Email
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    }
    else {
        res.status(400);
        throw new Error('Password and confirm password do not match');
    }
});
