import { combineReducers } from "redux";
import { menuReduser } from "./menu";
import { StoreState } from "../types";

const rootReducer = combineReducers<StoreState>({
  menu: menuReduser
});

export default rootReducer;
