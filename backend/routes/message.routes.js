import express from 'express';
import { sendMessage, getMesssage } from '../controllers/message.controllers.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMesssage);
router.get("")
export default router;