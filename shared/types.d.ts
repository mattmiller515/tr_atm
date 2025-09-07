declare type ErrorResponse = {
  message: string;
};

declare type UserInfoResponse = {
  userInfo: {
    id: string;
    firstName: string;
    lastName: string;
  } | null;
};

declare type BalanceResponse = {
  userBalanceCents: number;
};

declare type CardType =
  | "star"
  | "pulse"
  | "masterCard"
  | "maestro"
  | "plus"
  | "visa";

declare type CardResponse = {
  cardInfo: {
    cardType: CardType;
  };
};
