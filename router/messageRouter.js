import express from "express";
import { sendMessage } from "../controller/messageController";

const router = express.Router();

router.post("/send", sendMessage);

export default router;
