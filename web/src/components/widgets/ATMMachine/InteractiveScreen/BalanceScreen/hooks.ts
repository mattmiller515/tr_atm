import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../../../../../tools/api";

export const useGetUserBalance = ({
  userId,
  onError,
  onSuccess,
}: {
  userId: string;
  onSuccess: (response: AxiosResponse<BalanceResponse>) => void;
  onError: (error: AxiosError<ErrorResponse>) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [balanceCents, setBalanceCents] = useState<number | null>(null);

  const getUserBalance = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<BalanceResponse> = await api.get(
        `/balance/${userId}`
      );
      setBalanceCents(response.data.userBalanceCents);
      onSuccess(response);
    } catch (error) {
      onError(error as AxiosError<ErrorResponse>);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserBalance();
  }, []);

  return { balanceCents, loading };
};
