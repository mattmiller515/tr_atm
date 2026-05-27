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
      // Commit loading=false before the callback so any synchronous work in
      // it (e.g. window.alert) doesn't block while the spinner is still shown.
      flushSync(() => setLoading(false));
      onSuccess?.(response);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      setMessage(axiosError.response?.data?.message || "Something went wrong.");
      flushSync(() => setLoading(false));
      onError?.(axiosError);
    }
  };

  return { resetBalances, loading, message };
};
