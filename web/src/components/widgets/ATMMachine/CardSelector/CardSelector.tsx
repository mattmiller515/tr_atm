import { useUserContext } from "../UserContext";
import { useGetCardType } from "./hooks";
import { useEffect, useState } from "react";
import maestroActiveSrc from "../../../../assets/card_maestro_active.png";
import maestroInactiveSrc from "../../../../assets/card_maestro_inactive.png";
import masterCardActiveSrc from "../../../../assets/card_mastercard_active.png";
import masterCardInactiveSrc from "../../../../assets/card_mastercard_inactive.png";
import plusActiveSrc from "../../../../assets/card_plus_active.png";
import plusInactiveSrc from "../../../../assets/card_plus_inactive.png";
import pulseActiveSrc from "../../../../assets/card_pulse_active.png";
import pulseInactiveSrc from "../../../../assets/card_pulse_inactive.png";
import starActiveSrc from "../../../../assets/card_star_active.png";
import starInactiveSrc from "../../../../assets/card_star_inactive.png";
import visaActiveSrc from "../../../../assets/card_visa_active.png";
import visaInactiveSrc from "../../../../assets/card_visa_inactive.png";

const cardImages: Record<CardType, { active: string; inactive: string }> = {
  star: {
    active: starActiveSrc,
    inactive: starInactiveSrc,
  },
  pulse: {
    active: pulseActiveSrc,
    inactive: pulseInactiveSrc,
  },
  maestro: {
    active: maestroActiveSrc,
    inactive: maestroInactiveSrc,
  },
  masterCard: {
    active: masterCardActiveSrc,
    inactive: masterCardInactiveSrc,
  },
  plus: {
    active: plusActiveSrc,
    inactive: plusInactiveSrc,
  },
  visa: {
    active: visaActiveSrc,
    inactive: visaInactiveSrc,
  },
};

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
          src={cardImages[cardName][cardName === cardType ? "active" : "inactive"]}
          className="w-full"
        ></img>
      ))}
    </div>
  );
};
