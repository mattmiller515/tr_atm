import { cardDB } from "../models/card";

class CardService {
  getCardInfo = ({ userId }: { userId: string }) => {
    const cardInfo = cardDB.find((cardRecord) => cardRecord.userId === userId);

    return cardInfo || null;
  };
}

export const cardService = new CardService();
