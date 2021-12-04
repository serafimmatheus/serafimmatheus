import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const HomeContext = createContext();

export const HomeProviders = ({ children }) => {
  const [boderContact, setBorderContact] = useState(false);
  const [boderMidias, setBorderMidias] = useState(false);

  const addBorderContact = () => {
    setBorderContact(!boderContact);
  };

  const addBorderMidias = () => {
    setBorderMidias(!boderMidias);
  };

  const checkPage = (item) => {
    toast.success(`Você esta em ${item}`);
  };

  return (
    <HomeContext.Provider
      value={{
        addBorderContact,
        addBorderMidias,
        boderContact,
        boderMidias,
        checkPage,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
