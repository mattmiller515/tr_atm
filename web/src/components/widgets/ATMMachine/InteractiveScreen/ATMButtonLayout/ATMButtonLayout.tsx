import { ATMButton } from "../../../../core/ATMButton";
import { ButtonConfig } from "../../../../../types";

export const ATMButtonLayout = ({
  buttonMapping,
}: {
  buttonMapping: ButtonConfig[];
}) => {
  const leftSideButtons = buttonMapping.slice(0, buttonMapping.length / 2);
  const rightSideButtons = buttonMapping.slice(buttonMapping.length / 2);

  return (
    <>
      {/* left side buttons */}
      <div className="absolute left-0 top-0 translate-x-[-60px] h-full flex-1 flex flex-col gap-2 justify-end pb-2">
        {leftSideButtons.map((buttonObj, index) => {
          return (
            <ATMButton
              key={`atm-button-${index}`}
              side="left"
              onClick={buttonObj?.onClick}
            >
              {buttonObj?.label}
            </ATMButton>
          );
        })}
      </div>
      {/* right side buttons */}
      <div className="absolute right-0 top-0 translate-x-[60px] h-full flex-1 flex flex-col gap-2 justify-end items-end pb-2">
        {rightSideButtons.map((buttonObj, index) => {
          return (
            <ATMButton
              key={`atm-button-${index}`}
              side="right"
              onClick={buttonObj?.onClick}
            >
              {buttonObj?.label}
            </ATMButton>
          );
        })}
      </div>
    </>
  );
};
