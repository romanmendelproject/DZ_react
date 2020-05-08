import { coursesAPI } from "../api/api";
import { getAuthUserData } from "../redux/auth-reducer"

const SET_STUDENT_DATA = 'SET_STUDENT_DATA';

let initialState = {
    courses: {
        courses: [],
        studentId: null,
    }
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STUDENT_DATA:
            return { ...state, courses: action.payload }

        default:
            return state;
    }
}

export const setStudentDataAC = (courses, studentId) => ({ type: SET_STUDENT_DATA, payload: { courses, studentId } })

export const addStudentCourse = (courseId, del) => (dispatch, getState) => {
    const course = getState().student.courses.courses
    const studentId = getState().student.courses.studentId
    if (del) {
        var index = course.indexOf(courseId);
        if (index !== -1) course.splice(index, 1);
    }
    else {
        course.push(courseId);
    }
    coursesAPI.setStudentData(studentId, course)
        .then(response => {
            if (response.data.user.username) {
                dispatch(getAuthUserData())
            }
        })
}

export default studentReducer;