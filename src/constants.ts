import { GlobalContextType } from "./types";

export const DEFAULT_GLOBAL_CONTEXT: GlobalContextType = {
  api: {
    loading: false,
    requestCount: 0,
  },
};

export const LOCAL_STORAGE_KEY =
  process.env.REACT_APP_ENV_NAME === "prod"
    ? "infinite_monkey"
    : "infinite_monkey__dev";
