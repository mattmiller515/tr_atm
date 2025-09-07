import { useState } from "react";
import { LoadingSpinner } from "../../../../core/LoadingSpinner";
import { ATMButtonLayout } from "../ATMButtonLayout";
import { ScreenType } from "../InteractiveScreen";
import { useUserContext } from "../../UserContext";
import { useGetUserBalance } from "./hooks";
import { formatCentsAsDollarString } from "../../../../../tools/formatters";

export const BalanceScreen = ({
  setCurrentScreen,
}: {
  setCurrentScreen: (screenType: ScreenType) => void;
}) => {
  const [message, setMessage] = useState<string | null>(null);
  const { userContext } = useUserContext();
  if (!userContext) {
    setCurrentScreen("welcome");
    return;
  }

  const { loading } = useGetUserBalance({
    userId: userContext.id,
    onSuccess: (response) => {
      const balanceDollarsAsString = formatCentsAsDollarString(
        response.data.userBalanceCents
      );
      setMessage(`Balance: ${balanceDollarsAsString}`);
    },
    onError: (error) => {
      setMessage(error.response?.data?.message || "Something went wrong.");
    },
  });

  const buttonMapping = [
    null,
    null,
    null,
    { label: "Back", onClick: () => setCurrentScreen("mainMenu") },
    null,
    null,
    null,
    null,
  ];

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <h2 className="overflow-hidden">{message}</h2>
      )}
      <ATMButtonLayout buttonMapping={buttonMapping} />
    </>
  );
};
