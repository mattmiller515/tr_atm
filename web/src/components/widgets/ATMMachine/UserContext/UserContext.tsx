import { createContext, useState, useContext } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};
type UserContextType = {
  userContext: User | null;
  setUserContext: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const value = { userContext: user, setUserContext: setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
