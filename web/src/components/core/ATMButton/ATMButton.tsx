import { ATMOption } from "../ATMOption";
import { ReactNode, useState } from "react";

export const ATMButton = ({
  children,
  onClick,
  side,
}: {
  children: ReactNode;
  onClick?: () => void;
  side: "left" | "right";
}) => {
  const [inverted, setInverted] = useState(false);

  return (
    <div className="flex gap-1">
      {children && side === "right" && (
        <ATMOption connectionDirection={"right"}>{children}</ATMOption>
      )}

      <div className="flex items-center">
        {side === "right" && <div className="bg-gray-500 w-4 h-1" />}
        <button
          onClick={onClick}
          onMouseDown={() => setInverted(true)}
          onMouseUp={() => setInverted(false)}
          type="button"
          className={
            "w-10 h-6 hover:cursor-pointer flex flex-col rounded-sm bg-gray-300"
          }
        >
          <div
            className={`h-1 rounded-t-sm ${
              inverted ? "bg-gray-400" : "bg-gray-200"
            }`}
          />
          <div className="flex-1" />
          <div
            className={`h-1 rounded-b-sm ${
              inverted ? "bg-gray-200" : "bg-gray-400"
            }`}
          />
        </button>
        {side === "left" && <div className="bg-gray-500 w-4 h-1" />}
      </div>
      {children && side === "left" && (
        <ATMOption connectionDirection={"left"}>{children}</ATMOption>
      )}
    </div>
  );
};
