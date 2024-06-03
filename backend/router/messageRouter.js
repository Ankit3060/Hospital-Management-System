import express from 'express';
import { sendMessage,getAllMessages } from '../controller/message.controller.js';
import {isAdminAuthenticated,isPatientAuthenticated} from "../middlewares/auth.js"

const router = express.Router();

router.post("/send",sendMessage);
router.get("/getall",isAdminAuthenticated,getAllMessages);

export default router;