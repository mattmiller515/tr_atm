import express from "express";
import { cardController } from "../controllers/cardController";

const router = express.Router();

router.get("/:userId", cardController.getUserCard);

export { router as cardRoutes };
