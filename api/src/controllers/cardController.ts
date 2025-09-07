import { Response, Request } from "express";
import { cardService } from "../services/cardService";
import { AppError } from "../tools/error";

class CardController {
  getUserCard = (req: Request, res: Response) => {
    const userId = req.params.userId;
    if (!userId) {
      throw new AppError(400, "userId is required.");
    }

    const cardInfo = cardService.getCardInfo({
      userId,
    });

    if (!cardInfo) {
      throw new AppError(404, "User card was not found.");
    }

    const response: CardResponse = { cardInfo };
    res.status(200).json(response);
  };
}

export const cardController = new CardController();
