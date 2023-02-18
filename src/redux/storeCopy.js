import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
//import rootReducer from "../reducers/reducer";
//import tasksReducer from "../reducers/tasksReducer";

const storeCopy = createStore(rootReducer, applyMiddleware(thunk));

export default storeCopy;
