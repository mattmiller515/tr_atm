type Card = {
  userId: string;
  cardType: CardType;
};

const card1: Card = { userId: "1234", cardType: "star" };
const card2: Card = { userId: "5678", cardType: "pulse" };
const card3: Card = { userId: "9101", cardType: "masterCard" };
const card4: Card = { userId: "1121", cardType: "plus" };
const card5: Card = { userId: "3141", cardType: "visa" };

export const cardDB: Card[] = [card1, card2, card3, card4, card5];
