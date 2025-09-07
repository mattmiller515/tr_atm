import { ATMButtonLayout } from "../ATMButtonLayout";
import { ScreenType } from "../InteractiveScreen";
import { useUserContext } from "../../UserContext";

export const MainMenuScreen = ({
  setCurrentScreen,
}: {
  setCurrentScreen: (screenType: ScreenType) => void;
}) => {
  const { userContext, setUserContext } = useUserContext();

  const handleExit = () => {
    setUserContext(null);
    setCurrentScreen("welcome");
  };

  const buttonMapping = [
    null,
    null,
    { label: "Withdraw", onClick: () => setCurrentScreen("withdraw") },
    { label: "Deposit", onClick: () => setCurrentScreen("deposit") },
    null,
    { label: "Exit", onClick: handleExit },
    { label: "Balance", onClick: () => setCurrentScreen("balance") },
    { label: "Re-Enter PIN", onClick: () => setCurrentScreen("pin") },
  ];

  return (
    <>
      <div>
        Hi {userContext?.firstName} {userContext?.lastName}. Please make a
        choice...
      </div>
      <ATMButtonLayout buttonMapping={buttonMapping} />
    </>
  );
};
