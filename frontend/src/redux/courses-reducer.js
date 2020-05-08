import { coursesAPI } from "../api/api";

const SET_COURSES = 'SET_COURSES';
const SET_ONE_COURSE = 'SET_ONE_COURSE';

let initialState = {
    courses: [{ id: '' }],
    oneCourse: {
        id: '',
        title: '',
        teacher: {
            user: {
                username: ''
            }
        },
        students: [{
            user: {
                username: ''
            }
        }]
    },
};

const coursesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_COURSES: {
            return { ...state, courses: action.courses.data }
        }
        case SET_ONE_COURSE: {
            return { ...state, oneCourse: action.course.data }
        }
        default:
            return state;
    }
}

export const setCoursesAC = (courses) => ({ type: SET_COURSES, courses })
export const setOneCourseAC = (course) => ({ type: SET_ONE_COURSE, course })
export default coursesReducer;