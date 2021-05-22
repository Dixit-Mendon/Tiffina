import Vendor from '../models/VendorModel.js';
import List from '../models/ListModel.js';
import asyncHandler from "express-async-handler";

export const loginVendor = asyncHandler(async (req, res) => {
    const { Mobile, Password } = req.body;

    const vendor = await Vendor.findOne({ Mobile });
    if (vendor && (await vendor.matchPassword(Password))) {
        res.status(200).json({
            _id: vendor._id,
            Username: vendor.Username,
            Email: vendor.Email,
            Mobile: vendor.Mobile,
        });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
});

export const registerVendor = asyncHandler(async (req, res) => {
    const { Username, Email, Mobile, Password, ConfirmPassword } = req.body;

    const vendorExists = await Vendor.findOne({ $or: [{ Username: Username }, { Email: Email }, { Mobile: Mobile }] });

    if (vendorExists) {
        res.status(400);
        throw new Error('Vendor already exists');
    }

    if (Password === ConfirmPassword) {
        const vendor = await Vendor.create({ Username, Email, Mobile, Password });
        if (vendor) {
            res.status(201).json({
                _id: vendor._id,
                Username: vendor.Username,
                Email: vendor.Password,
                Mobile: vendor.Mobile,
            });
        } else {
            res.status(400);
            throw new Error('Invalid vendor data');
        }
    }
    else {
        res.status(400);
        throw new Error('Password and confirm password do not match');
    }

});

export const getList = asyncHandler(async (req, res) => {
    const list = await List.find({});
    console.log(list);
    if (list) {
        res.status(200).json(list);
    }
    else {
        res.status(400);
        throw new Error('Password and confirm password do not match');
    }
});