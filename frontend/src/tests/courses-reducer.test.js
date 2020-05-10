import coursesReducer, { setCoursesAC} from "../redux/courses-reducer";


let state = {
    courses: [],
};

const courses = {
    data: [
        { id: 1, title: "python Developer" },
        { id: 2, title: "java developer" },
        { id: 3, title: "javascript developer" },
        { id: 4, title: "golang developer" },
        { id: 5, title: "123" },
        { id: 6, title: "456" }
    ]
}


it('length of courses', () => {

    let action = setCoursesAC(courses);

    let newState = coursesReducer(state, action);

    expect(newState.courses.length).toBe(6);

});

