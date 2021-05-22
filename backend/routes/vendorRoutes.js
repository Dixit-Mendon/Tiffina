import express from 'express';
import { loginVendor, registerVendor, getList } from '../controllers/vendorController.js';

const router = express.Router();

router.route('/login').post(loginVendor);
router.route('/register').post(registerVendor);
router.route('/list').get(getList);

export default router;