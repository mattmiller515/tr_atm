import { useUserContext } from "../UserContext";
import { useGetCardType } from "./hooks";
import { useEffect, useState } from "react";

export const CardSelector = () => {
  const { getCardType } = useGetCardType();
  const { userContext } = useUserContext();
  const [cardType, setCardType] = useState<CardType | null>(null);

  const onSuccess = (cardResponse: CardResponse) => {
    setCardType(cardResponse.cardInfo.cardType);
  };

  const onError = () => {
    console.error("error collecting card type");
    setCardType(null);
  };

  useEffect(() => {
    if (!userContext) {
      setCardType(null);
    } else {
      getCardType({
        userId: userContext.id,
        onSuccess,
        onError,
      });
    }
  }, [userContext?.id]);

  const cardNames: CardType[] = [
    "star",
    "pulse",
    "maestro",
    "masterCard",
    "plus",
    "visa",
  ];

  return (
    <div className="max-w-xs mx-auto flex justify-between mt-1">
      {cardNames.map((cardName) => (
        <img
          key={cardName}
          src={`src/assets/card_${cardName}_${
            cardName === cardType ? "active" : "inactive"
          }.png`}
          className="w-full"
        ></img>
      ))}
    </div>
  );
};
