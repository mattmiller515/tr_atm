import { useState } from "react";
import { LoadingSpinner } from "../../core/LoadingSpinner";
import { useResetBalances } from "./hooks";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const ResetButton = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const { resetBalances, loading } = useResetBalances({
    onSuccess: () => {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    },
    onError: () => {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    },
  });

  const colorClasses = isSuccess
    ? "border-green-600 bg-green-500 text-white hover:bg-green-500"
    : isError
    ? "border-red-600 bg-red-500 text-white hover:bg-red-500"
    : "border-gray-400 bg-gray-200 text-gray-700 hover:bg-gray-300";

  const content = loading ? (
    <LoadingSpinner />
  ) : isSuccess ? (
    <CheckIcon />
  ) : isError ? (
    <XIcon />
  ) : (
    "Reset Balances"
  );

  return (
    <button type="button" onClick={resetBalances} disabled={loading} className={`w-40 h-10 font-sans rounded-md border-2 p-4 hover:cursor-pointer flex items-center justify-center text-sm font-semibold transition-colors duration-500 ${colorClasses}`}>
      {content}
    </button>
  );
};