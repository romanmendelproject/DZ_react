import { applyMiddleware, combineReducers, createStore } from "redux";
import sidebarReducer from "./sidebar-reducer";
import coursesReducer from "./courses-reducer";
import studentReducer from "./student-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    sidebar: sidebarReducer,
    coursesPage: coursesReducer,
    student: studentReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;