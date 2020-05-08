import {authAPI} from "../api/api";
import { setStudentDataAC } from "../redux/student-reducer"

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, login, isAuth) => ({type: SET_USER_DATA, payload:
        {userId, login, isAuth}  });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.username) {
                debugger
                let {id, username} = response.data;
                dispatch(setAuthUserData(id, username, true));
                dispatch(setStudentDataAC(response.data.student.course, response.data.student.id))
            }
        })
}

export const login = (username, password) => (dispatch) => {
    authAPI.login(username, password)
        .then(response => {
            if (response.data.username) {
                dispatch(getAuthUserData())
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (!response.data.username) {
                dispatch(setAuthUserData(null, null, false));
            }
        });
}

export default authReducer;