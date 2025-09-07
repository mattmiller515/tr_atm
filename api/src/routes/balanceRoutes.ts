import express from "express";
import { balanceController } from "../controllers/balanceController";

const router = express.Router();

router.get("/:userId", balanceController.getUserBalance);
router.post("/:userId/deposit", balanceController.depositToBalance);
router.post("/:userId/withdraw", balanceController.withdrawFromBalance);

export { router as balanceRoutes };
