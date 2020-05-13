import React from "react";
import { create } from "react-test-renderer";
import Courses from "../components/OneCourse/OneCourse";

describe("OneCourse component", () => {

    let oneCourse = {
        title: 'testTeacher',
        teacher: {
            user: {
                first_name: 'FirstName',
                last_name: 'LastName'
            }
        },
        students: [{
            user: {
                username: 'student1'
            }
        },
        {
            user: {
                username: 'student2'
            }
        },
        ]
    }

    test("test span text", () => {
        const component = create(<Courses oneCourse={oneCourse} />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe('testTeacher');
    });

    test("test tearcher FirstName", () => {
        const component = create(<Courses oneCourse={oneCourse} />);
        const root = component.root;
        let h2 = root.findByType("h2");
        expect(h2.children[0]).toBe('FirstName');
    });

    test("test tearcher LastName", () => {
        const component = create(<Courses oneCourse={oneCourse} />);
        const root = component.root;
        let h2 = root.findByType("h2");
        expect(h2.children[1]).toBe('LastName');
    });

    test("test students <li> tag amount", () => {
        const component = create(<Courses oneCourse={oneCourse} />);
        const root = component.root;
        let students_name = root.findAllByType("li");
        expect(students_name.length).toBe(2);

    });

    test("test student1 name in <li> tag", () => {
        const component = create(<Courses oneCourse={oneCourse} />);
        const root = component.root;
        let students_name = root.findAllByType("li")[0];
        expect(students_name.children[0]).toBe('student1');
    });

    test("test student2 name in <li> tag", () => {
        const component = create(<Courses oneCourse={oneCourse} />);
        const root = component.root;
        let students_name = root.findAllByType("li")[1];
        expect(students_name.children[0]).toBe('student2');
    });

    test("test <button> tag amount", () => {
        const component = create(<Courses oneCourse={oneCourse} />);
        const root = component.root;
        let students_button = root.findAllByType("button");
        expect(students_button.length).toBe(2);
    });

    test("test button1 tag text", () => {
        const component = create(<Courses oneCourse={oneCourse} />);
        const root = component.root;
        let students_button = root.findAllByType("button")[0];
        expect(students_button.children[0]).toBe('Add Me');
    });

    test("test button2 tag text", () => {
        const component = create(<Courses oneCourse={oneCourse} />);
        const root = component.root;
        let students_button = root.findAllByType("button")[1];
        expect(students_button.children[0]).toBe('Delete Me');
    });

    test("test button1 callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<Courses oneCourse={oneCourse} addStudentCourse={mockCallback} />);
        const root = component.root;
        let students_button = root.findAllByType("button")[0];
        students_button.props.onClick();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

    test("test button2 callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<Courses oneCourse={oneCourse} addStudentCourse={mockCallback} />);
        const root = component.root;
        let students_button = root.findAllByType("button")[1];
        students_button.props.onClick();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});