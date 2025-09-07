export const CardOption = ({
  isActive,
  activeImagePath,
  inactiveImagePath,
}: {
  isActive: boolean;
  activeImagePath: string;
  inactiveImagePath: string;
}) => {
  return <img src={isActive ? activeImagePath : inactiveImagePath}></img>;
};
