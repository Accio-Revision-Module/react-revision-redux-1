import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import counterReducer from "./reducers/counter";
import { customLogger } from "../middlewares/customLogger";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import usersReducer from "./reducers/users";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(customLogger, logger, thunk)),
);
