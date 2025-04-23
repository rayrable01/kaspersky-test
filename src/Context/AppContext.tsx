import React, { createContext, FC } from "react";
import { data } from "../data/data";
import { IData_SnippetNews } from "../types/types";

export const AppContext = createContext<{data: IData_SnippetNews}>({data});

export interface ProviderProps {
    children: React.ReactNode;
}

export const AppProvider: FC<ProviderProps> = ({children}) => {

    return (
        <AppContext.Provider value={{data}}>
        {children}
        </AppContext.Provider>
    )
}