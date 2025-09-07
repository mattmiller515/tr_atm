import { Response, Request } from "express";
import { pinService } from "../services/pinService";
import { AppError } from "../tools/error";
import { balanceService } from "../services/balanceService";

class BalanceController {
  getUserBalance = (req: Request, res: Response) => {
    const userId = req.params.userId;
    if (!userId) {
      throw new AppError(400, "userId is required.");
    }

    const userBalanceCents = balanceService.getUserBalance({ userId });
    if (userBalanceCents === undefined)
      throw new AppError(404, "User balance was not found.");

    const response: BalanceResponse = { userBalanceCents };
    res.status(200).json(response);
  };

  depositToBalance = (req: Request, res: Response) => {
    const userId = req.params.userId;
    const amountCents: number | null | undefined = req.body.amountCents;
    if (!userId) {
      throw new AppError(400, "userId is required.");
    }
    if (amountCents === null || amountCents === undefined) {
      throw new AppError(400, "amountCents is required.");
    }
    if (typeof amountCents !== "number") {
      throw new AppError(
        400,
        `Exepected type number. Received ${typeof amountCents}`
      );
    }

    const updatedBalanceCents = balanceService.deposit({ userId, amountCents });
    const response: BalanceResponse = { userBalanceCents: updatedBalanceCents };

    res.status(200).json(response);
  };

  withdrawFromBalance = (req: Request, res: Response) => {
    const userId = req.params.userId;
    const amountCents: number | null | undefined = req.body.amountCents;
    if (!userId) {
      throw new AppError(400, "userId is required.");
    }
    if (amountCents === null || amountCents === undefined) {
      throw new AppError(400, "amountCents is required.");
    }
    if (typeof amountCents !== "number") {
      throw new AppError(
        400,
        `Exepected type number. Received ${typeof amountCents}`
      );
    }

    const updatedBalanceCents = balanceService.withdraw({
      userId,
      amountCents,
    });
    const response: BalanceResponse = { userBalanceCents: updatedBalanceCents };

    res.status(200).json(response);
  };
}

export const balanceController = new BalanceController();
