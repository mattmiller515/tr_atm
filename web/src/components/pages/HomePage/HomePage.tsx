import { ATMMachine } from "../../widgets/ATMMachine";

export const HomePage = () => {
  return (
    <div className="h-full bg-violet-300">
      <div className="h-full flex justify-center">
        <div className="h-full pt-16">
          <ATMMachine />
        </div>
      </div>
    </div>
  );
};
