import { combineReducers, compose,  createStore  } from "redux";


import { todoReducer } from "./todoReducer";

const allReducers = combineReducers({
     todoReducer
})

const store = createStore(allReducers, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;


