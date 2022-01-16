import React, {
  useReducer,
  useEffect,
  createContext,
  Dispatch,
  ReactNode,
} from "react";

import { GLOBAL_CONTEXT_ACTION_NAME, GlobalContextType } from "../types";
import { DEFAULT_GLOBAL_CONTEXT, LOCAL_STORAGE_KEY } from "../constants";
import globalContextReducer from "./Global.reducer";

type GlobalContextProviderType = {
  dispatch: Dispatch<any>;
  globalContext: GlobalContextType;
};

const GlobalContext = createContext<GlobalContextProviderType>(
  {} as GlobalContextProviderType
);
GlobalContext.displayName = "GlobalContext";

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [globalContext, dispatch] = useReducer(
    globalContextReducer,
    DEFAULT_GLOBAL_CONTEXT
  );

  useEffect(() => {
    const localPersistedContext = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (localPersistedContext) {
      const currentVersion = process.env.REACT_APP_VERSION;
      const persistedContext = JSON.parse(localPersistedContext);

      if (persistedContext.v && persistedContext.v === currentVersion) {
        dispatch({
          name: GLOBAL_CONTEXT_ACTION_NAME.LOAD_PERSISTED_CONTEXT,
          value: persistedContext,
        });
      } else {
        dispatch({
          name: GLOBAL_CONTEXT_ACTION_NAME.RESET,
        });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(globalContext));
    console.debug(
      "__∆∆__ globalContext change detected – storing globalContext:",
      globalContext
    );
  }, [globalContext]);

  const providerValue: GlobalContextProviderType = {
    dispatch,
    globalContext,
  };

  return (
    <GlobalContext.Provider value={providerValue}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
