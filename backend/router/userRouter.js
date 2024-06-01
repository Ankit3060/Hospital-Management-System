import express from 'express';
import { patientRegister } from '../controller/user.controller.js';
import { login } from '../controller/user.controller.js';
import {addAdmin} from '../controller/user.controller.js';

const router = express.Router();

router.post("/patient/register",patientRegister);
router.post("/login",login);
router.post("/admin/addnew",addAdmin);

export default router;