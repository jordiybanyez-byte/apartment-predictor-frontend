import React, { createContext, useContext, type ReactNode } from "react";
import { apartmentService } from "./apartmentService";

type ApiContextType = typeof apartmentService;

const ApiContext = createContext<ApiContextType>(apartmentService);

export const useApi = () => useContext(ApiContext);

type ApiProviderProps = {
  children: ReactNode;
};

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  return (
    <ApiContext.Provider value={apartmentService}>
      {children}
    </ApiContext.Provider>
  );
};
