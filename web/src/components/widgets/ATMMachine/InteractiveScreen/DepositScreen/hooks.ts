import { useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../../../../../tools/api";

export const useDeposit = () => {
  const [loading, setLoading] = useState(false);

  const deposit = async ({
    userId,
    amountCents,
    onSuccess,
    onError,
  }: {
    userId: string;
    amountCents: number;
    onSuccess: (response: BalanceResponse) => void;
    onError: (error: AxiosError<ErrorResponse>) => void;
  }) => {
    setLoading(true);
    try {
      const response: AxiosResponse<BalanceResponse> = await api.post(
        `/balance/${userId}/deposit`,
        {
          amountCents,
        }
      );
      onSuccess(response.data);
    } catch (error) {
      onError(error as AxiosError<ErrorResponse>);
    } finally {
      setLoading(false);
    }
  };

  return {
    deposit,
    loading,
  };
};
