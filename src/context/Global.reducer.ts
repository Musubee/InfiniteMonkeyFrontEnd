import { remove, removeIn, set, setIn } from "immutable";

import {
  GLOBAL_CONTEXT_ACTION_NAME as ACTION_NAME,
  GlobalContextType,
  ModalPropsType,
} from "../types";
import { DEFAULT_GLOBAL_CONTEXT } from "../constants";

type GlobalContextAction =
  | {
      name: ACTION_NAME.LOAD_PERSISTED_CONTEXT;
      value: GlobalContextType;
    }
  | {
      name: ACTION_NAME.REMOVE_IN;
      path: Array<string | number>;
    }
  | { name: ACTION_NAME.REQUEST_START }
  | { name: ACTION_NAME.REQUEST_COMPLETE }
  | { name: ACTION_NAME.RESET }
  | {
      name: ACTION_NAME.SET_IN;
      path: Array<string | number>;
      value: any;
    }
  | {
      modal: ModalPropsType;
      name: ACTION_NAME.SET_MODAL;
    };

const globalContextReducer = (
  globalContext: GlobalContextType,
  action: GlobalContextAction
): GlobalContextType => {
  switch (action.name) {
    case ACTION_NAME.LOAD_PERSISTED_CONTEXT: {
      // When loading persisted context, remove modal value and reset api values
      return {
        ...remove(action.value, "modal"),
        api: DEFAULT_GLOBAL_CONTEXT.api,
      };
    }

    case ACTION_NAME.REMOVE_IN: {
      return removeIn(globalContext, action.path);
    }

    case ACTION_NAME.REQUEST_START: {
      const updatedApiState = {
        loading: true,
        requestCount: globalContext.api.requestCount + 1,
      };

      return set(globalContext, "api", updatedApiState);
    }

    case ACTION_NAME.REQUEST_COMPLETE: {
      const updatedRequestCount = globalContext.api.requestCount - 1;
      const updatedApiState = {
        loading: updatedRequestCount > 0,
        requestCount: updatedRequestCount,
      };

      return set(globalContext, "api", updatedApiState);
    }

    case ACTION_NAME.RESET: {
      return {
        ...DEFAULT_GLOBAL_CONTEXT,
      };
    }

    case ACTION_NAME.SET_IN: {
      return setIn(globalContext, action.path, action.value);
    }

    case ACTION_NAME.SET_MODAL: {
      return set(globalContext, "modal", action.modal);
    }

    default:
      return globalContext;
  }
};

export default globalContextReducer;
