import { userDB } from "../models/user";
import { pinDB } from "../models/pin";

class PinService {
  getUserInfoFromPIN = ({ pin }: { pin: string }) => {
    const foundPIN = pinDB.find((pinObj) => pinObj.pin === pin);
    if (!foundPIN) {
      return null;
    }
    const foundUser = userDB.find((user) => user.id === foundPIN.userId);
    return foundUser || null;
  };
}

export const pinService = new PinService();
