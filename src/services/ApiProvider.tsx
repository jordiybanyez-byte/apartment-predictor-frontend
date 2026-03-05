import React, { createContext, useContext, type ReactNode } from "react";
import { apartmentService } from "./apartmentService.ts";


const ApiContext = createContext(apartmentService);


export const useApi = () => useContext(ApiContext);


type ApiProviderProps = {
  children: ReactNode;
};

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  return <ApiContext.Provider value={apartmentService}>{children}</ApiContext.Provider>;
};