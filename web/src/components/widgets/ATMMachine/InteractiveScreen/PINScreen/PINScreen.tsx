import { Input } from "../../../../core/Input";
import { LoadingSpinner } from "../../../../core/LoadingSpinner";
import { ATMButtonLayout } from "../ATMButtonLayout";
import { ScreenType } from "../InteractiveScreen";
import { useForm } from "react-hook-form";
import { ButtonConfig } from "../../../../../types";
import { useVerifyPIN } from "./hooks";
import { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { useUserContext } from "../../UserContext";

type PinInput = {
  pin: string | undefined;
};

export const PINScreen = ({
  setCurrentScreen,
}: {
  setCurrentScreen: (screenType: ScreenType) => void;
}) => {
  const DEFAULT_MESSAGE = "Please enter your PIN...";
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PinInput>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const { verifyPIN, loading } = useVerifyPIN();
  const { setUserContext } = useUserContext();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (errors.pin?.message) {
      setMessage(errors.pin?.message);
    }
  }, [errors]);

  const onSuccess = (data: UserInfoResponse) => {
    if (data.userInfo) {
      setUserContext(data.userInfo);
      setCurrentScreen("mainMenu");
    } else {
      setMessage("Invalid PIN");
    }
  };

  const onError = (error: AxiosError<ErrorResponse>) => {
    setMessage(
      error.response?.data?.message || "Something went wrong. Please try again."
    );
  };

  const onSubmit = async (pinInput: PinInput) => {
    if (!pinInput.pin) {
      setMessage("PIN is required.");
      return;
    }
    await verifyPIN({ pin: pinInput.pin, onSuccess, onError });
  };

  const buttonMapping: ButtonConfig[] = [
    null,
    null,
    null,
    {
      label: "Back",
      onClick: () => {
        setUserContext(null);
        setCurrentScreen("welcome");
      },
    },
    null,
    null,
    null,
    {
      label: "Enter",
      onClick: () => {
        handleSubmit(onSubmit)();
      },
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-2">{message}</h2>
        <Input name="pin" control={control} maxLength={4} ref={inputRef} />
        <div className="mt-2">{loading && <LoadingSpinner />}</div>
        <ATMButtonLayout buttonMapping={buttonMapping} />
      </form>
    </>
  );
};
