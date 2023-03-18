// Root reducer
import changeTheNumber from "./upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // it is an object actually
  changeTheNumber,
});

export default rootReducer;
