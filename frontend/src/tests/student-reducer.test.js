import studentReducer, { setStudentDataAC } from "../redux/student-reducer";


let state = {
    courses: {
        courses: ['1', '2', '3'],
        studentId: null,
    }
};



it('add courses of student', () => {

    let action = setStudentDataAC(['1', '2', '3', '4'], 1);

    let newState = studentReducer(state, action);

    expect(newState.courses.courses.length).toBe(4);

});

it('remove courses of student', () => {

    let action = setStudentDataAC(['1', '2'], 1);

    let newState = studentReducer(state, action);

    expect(newState.courses.courses.length).toBe(2);

});

it('correct courses of student', () => {

    let action = setStudentDataAC(['1', '2','5'], 1);

    let newState = studentReducer(state, action);

    expect(newState.courses.courses[2]).toBe('5');

});
