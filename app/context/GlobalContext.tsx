"use client";

import React, { createContext, useContext } from "react";
import { useGlobalState } from "./useGlobalState";
import { GlobalContextType } from "../Types";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextValue = useGlobalState();

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
}
