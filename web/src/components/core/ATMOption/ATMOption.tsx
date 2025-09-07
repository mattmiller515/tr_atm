import { ReactNode } from "react";

export const ATMOption = ({
  children,
  connectionDirection,
}: {
  children: ReactNode;
  connectionDirection: "right" | "left";
}) => {
  return (
    <div className="flex items-center text-xs w-fit">
      {connectionDirection === "left" && (
        <div className="bg-gray-100 w-4 h-1" />
      )}

      <span className="mx-2">{children}</span>
      {connectionDirection === "right" && (
        <div className="bg-gray-100 w-4 h-1" />
      )}
    </div>
  );
};
