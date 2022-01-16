import { ReactNode } from "react";

export enum GLOBAL_CONTEXT_ACTION_NAME {
  LOAD_PERSISTED_CONTEXT = "loadPersistedContext",
  REMOVE_IN = "removeIn",
  REQUEST_COMPLETE = "requestComplete",
  REQUEST_START = "requestStart",
  RESET = "reset",
  SET_IN = "setIn",
  SET_MODAL = "setModal",
}

export type ModalPropsType = {
  body: ReactNode;
  cancel?: string;
  cancelable?: boolean;
  confirm?: string;
  heading?: string;
  hideFooter?: boolean;
  name?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  zIndex?: number;
};

export type GlobalContextType = {
  api: {
    loading: boolean;
    requestCount: number;
  };
  lastUpdated?: string;
  modal?: ModalPropsType;
};
