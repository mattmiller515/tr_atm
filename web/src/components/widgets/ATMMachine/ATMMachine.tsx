import { CardSelector } from "./CardSelector";
import { InteractiveScreen } from "./InteractiveScreen";
import { UserProvider } from "./UserContext";

export const ATMMachine = () => {
  return (
    <UserProvider>
      <div className="h-full flex flex-col items-center">
        <div className="w-lg rounded-xl bg-[#136cae] flex justify-center p-4 relative">
          <img src="src/assets/atm_sign.png"></img>
          <img
            src="src/assets/graffiti.png"
            className="absolute top-7 right-17"
          ></img>
        </div>
        <div className="bg-white w-md h-full">
          <div className="h-4 bg-gray-300"></div>
          <CardSelector />
          <div className="mt-4 mb-2 relative">
            <InteractiveScreen />
            <img
              src="src/assets/sticker_graf.png"
              className="absolute top-60 left-7"
            ></img>
          </div>
          <div className="w-xs mx-auto">
            <img src="src/assets/systems.png" className="ml-auto"></img>
          </div>
        </div>
      </div>
    </UserProvider>
  );
};
