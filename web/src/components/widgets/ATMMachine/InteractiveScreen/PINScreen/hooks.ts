import { useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../../../../../tools/api";

export const useVerifyPIN = () => {
  const [loading, setLoading] = useState(false);

  const verifyPIN = async ({
    pin,
    onSuccess,
    onError,
  }: {
    pin: string;
    onSuccess: (response: UserInfoResponse) => void;
    onError: (error: AxiosError<ErrorResponse>) => void;
  }) => {
    setLoading(true);
    try {
      const response: AxiosResponse<UserInfoResponse> = await api.post(
        "/pin/verify",
        {
          pin,
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
    verifyPIN,
    loading,
  };
};
