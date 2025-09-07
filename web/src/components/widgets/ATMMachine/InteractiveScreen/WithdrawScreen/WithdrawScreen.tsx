import { useForm } from "react-hook-form";
import { ATMButtonLayout } from "../ATMButtonLayout";
import { ScreenType } from "../InteractiveScreen";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../../../core/LoadingSpinner";
import { useWithdraw } from "./hooks";
import { useUserContext } from "../../UserContext";
import { AxiosError } from "axios";
import {
  formatCentsAsDollarString,
  formatDollarsStringToCents,
} from "../../../../../tools/formatters";
import { Input } from "../../../../core/Input";

type WithdrawInput = {
  withdrawAmountDollars: string | undefined;
};

export const WithdrawScreen = ({
  setCurrentScreen,
}: {
  setCurrentScreen: (screenType: ScreenType) => void;
}) => {
  const DEFAULT_MESSAGE = "Enter withdraw amount...";

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<WithdrawInput>();
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const { withdraw, loading } = useWithdraw();
  const { userContext } = useUserContext();
  if (!userContext) {
    setCurrentScreen("welcome");
    return;
  }

  useEffect(() => {
    if (errors.withdrawAmountDollars?.message) {
      setMessage(errors.withdrawAmountDollars?.message);
    }
  }, [errors]);

  const onSuccess = (data: BalanceResponse) => {
    const formattedAmountDollars = formatCentsAsDollarString(
      data.userBalanceCents
    );
    setMessage(`Balance updated successfully: ${formattedAmountDollars}`);
  };

  const onError = (error: AxiosError<ErrorResponse>) => {
    setMessage(
      error.response?.data?.message || "Something went wrong. Please try again."
    );
  };

  const onSubmit = async (withdrawInput: WithdrawInput) => {
    if (!withdrawInput.withdrawAmountDollars) {
      setMessage("Withdraw amount is required.");
      return;
    }
    await withdraw({
      userId: userContext?.id,
      amountCents: formatDollarsStringToCents(
        withdrawInput.withdrawAmountDollars
      ),
      onSuccess,
      onError,
    });
  };
  const buttonMapping = [
    null,
    null,
    null,
    { label: "Back", onClick: () => setCurrentScreen("mainMenu") },
    null,
    null,
    null,
    { label: "Enter", onClick: () => handleSubmit(onSubmit)() },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-2 overflow-hidden">{message}</h2>
      <Input name="withdrawAmountDollars" control={control} isCurrency />
      <div className="mt-2">{loading && <LoadingSpinner />}</div>
      <ATMButtonLayout buttonMapping={buttonMapping} />
    </form>
  );
};
