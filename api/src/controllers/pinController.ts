import { Response, Request } from "express";
import { pinService } from "../services/pinService";
import { AppError } from "../tools/error";

class PinController {
  getUserInfoFromPIN = async (req: Request, res: Response) => {
    const pin: string | undefined = req.body.pin;
    if (!pin) {
      throw new AppError(400, "PIN is required.");
    }

    const userInfo = pinService.getUserInfoFromPIN({ pin });
    const response: UserInfoResponse = { userInfo };
    res.status(200).json(response);
  };
}

export const pinController = new PinController();
