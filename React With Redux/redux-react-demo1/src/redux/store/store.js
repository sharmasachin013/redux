import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "../reducers/counterReducer";

const store = createStore(counterReducer, composeWithDevTools());

export default store;
