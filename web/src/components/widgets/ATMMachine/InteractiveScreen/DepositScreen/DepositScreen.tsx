import { useForm } from "react-hook-form";
import { ATMButtonLayout } from "../ATMButtonLayout";
import { ScreenType } from "../InteractiveScreen";
import { useEffect, useState, useRef } from "react";
import { LoadingSpinner } from "../../../../core/LoadingSpinner";
import { useDeposit } from "./hooks";
import { useUserContext } from "../../UserContext";
import { AxiosError } from "axios";
import {
  formatCentsAsDollarString,
  formatDollarsStringToCents,
} from "../../../../../tools/formatters";
import { Input } from "../../../../core/Input";

type DepositInput = {
  depositAmountDollars: string | undefined;
};

export const DepositScreen = ({
  setCurrentScreen,
}: {
  setCurrentScreen: (screenType: ScreenType) => void;
}) => {
  const DEFAULT_MESSAGE = "Enter deposit amount...";
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DepositInput>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const { deposit, loading } = useDeposit();
  const { userContext } = useUserContext();
  if (!userContext) {
    setCurrentScreen("welcome");
    return;
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (errors.depositAmountDollars?.message) {
      setMessage(errors.depositAmountDollars?.message);
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

  const onSubmit = async (depositInput: DepositInput) => {
    if (!depositInput.depositAmountDollars) {
      setMessage("Deposit amount is required.");
      return;
    }

    await deposit({
      userId: userContext?.id,
      amountCents: formatDollarsStringToCents(
        depositInput.depositAmountDollars
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
      <Input
        name="depositAmountDollars"
        control={control}
        isCurrency
        ref={inputRef}
      />
      <div className="mt-2">{loading && <LoadingSpinner />}</div>
      <ATMButtonLayout buttonMapping={buttonMapping} />
    </form>
  );
};
