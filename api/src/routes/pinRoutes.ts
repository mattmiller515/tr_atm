import express from "express";
import { pinController } from "../controllers/pinController";

const router = express.Router();

//using post since using sensitive data
router.post("/verify", pinController.getUserInfoFromPIN);

export { router as pinRoutes };
