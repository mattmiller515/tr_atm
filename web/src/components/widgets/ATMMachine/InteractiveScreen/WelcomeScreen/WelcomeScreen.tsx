import { ATMButtonLayout } from "../ATMButtonLayout";
import { ScreenType } from "../InteractiveScreen";
export const WelcomeScreen = ({
  setCurrentScreen,
}: {
  setCurrentScreen: (screenType: ScreenType) => void;
}) => {
  const buttonMapping = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { label: "Enter PIN", onClick: () => setCurrentScreen("pin") },
  ];

  return (
    <>
      <div className="h-full flex flex-col">
        <h2 className="mx-4">Welcome to the ATM</h2>
      </div>
      <ATMButtonLayout buttonMapping={buttonMapping} />
    </>
  );
};
