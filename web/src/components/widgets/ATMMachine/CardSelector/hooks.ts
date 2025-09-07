import { useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../../../../tools/api";

export const useGetCardType = () => {
  const [loading, setLoading] = useState(false);

  const getCardType = async ({
    userId,
    onSuccess,
    onError,
  }: {
    userId: string;
    onSuccess: (response: CardResponse) => void;
    onError: (error: AxiosError<ErrorResponse>) => void;
  }) => {
    setLoading(true);
    try {
      const response: AxiosResponse<CardResponse> = await api.get(
        `/cards/${userId}`
      );
      onSuccess(response.data);

      return response.data;
    } catch (error) {
      onError(error as AxiosError<ErrorResponse>);
    } finally {
      setLoading(false);
    }
  };

  return {
    getCardType,
    loading,
  };
};
