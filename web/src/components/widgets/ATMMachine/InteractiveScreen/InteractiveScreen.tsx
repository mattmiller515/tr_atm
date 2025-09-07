import { ReactNode, useState, createContext } from "react";
import { WelcomeScreen } from "./WelcomeScreen";
import { MainMenuScreen } from "./MainMenuScreen";
import { DepositScreen } from "./DepositScreen";
import { WithdrawScreen } from "./WithdrawScreen";
import { BalanceScreen } from "./BalanceScreen";
import { PINScreen } from "./PINScreen";

export type ScreenType =
  | "welcome"
  | "mainMenu"
  | "deposit"
  | "withdraw"
  | "balance"
  | "pin";

export const InteractiveScreen = () => {
  //TODO - update default screen to welcome
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("pin");

  const screenMapping: Record<ScreenType, ReactNode> = {
    welcome: <WelcomeScreen setCurrentScreen={setCurrentScreen} />,
    mainMenu: <MainMenuScreen setCurrentScreen={setCurrentScreen} />,
    deposit: <DepositScreen setCurrentScreen={setCurrentScreen} />,
    withdraw: <WithdrawScreen setCurrentScreen={setCurrentScreen} />,
    balance: <BalanceScreen setCurrentScreen={setCurrentScreen} />,
    pin: <PINScreen setCurrentScreen={setCurrentScreen} />,
  };

  return (
    <div className="flex justify-center">
      <div className="border-4 border-gray-200 bg-[#72acd0] text-center pt-8 relative h-64 w-xs">
        {screenMapping[currentScreen]}
      </div>
    </div>
  );
};
