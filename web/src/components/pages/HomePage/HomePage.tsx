import { ATMMachine } from "../../widgets/ATMMachine";
import { HelpModal } from "../../widgets/HelpModal";

export const HomePage = () => {
  return (
    <div className="relative h-full bg-violet-300 overflow-hidden">
      <div className="absolute top-6 right-6">
        <HelpModal />
      </div>
      <div className="h-full flex justify-center">
        <div className="h-full pt-16">
          <ATMMachine />
        </div>
      </div>
    </div>
  );
};
