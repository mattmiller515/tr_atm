import { useState } from "react";
import { flushSync } from "react-dom";
import { api } from "../../../tools/api";
import { AxiosError, AxiosResponse } from "axios";

export const useResetBalances = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (response: AxiosResponse<ResetBalancesResponse>) => void;
  onError?: (error: AxiosError<ErrorResponse>) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const resetBalances = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<ResetBalancesResponse> =
        await api.post("/balance/reset");
      setMessage(response.data.message);
      onSuccess?.(response);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      setMessage(axiosError.response?.data?.message || "Something went wrong.");
      onError?.(axiosError);
    } finally {
      setLoading(false);
    }
  };

  return { resetBalances, loading, message };
};
