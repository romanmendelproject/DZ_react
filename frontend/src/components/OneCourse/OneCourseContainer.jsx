import React from 'react';
import { connect } from 'react-redux';
import { setOneCourseAC } from '../../redux/courses-reducer';
import { addStudentCourse } from '../../redux/student-reducer';
import OneCourse from './OneCourse';
import { coursesAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "react-router-dom";


class OneCourseContainer extends React.Component {
    componentDidMount() {
        let courseId = this.props.match.params.id;
        coursesAPI.getOneCourse(courseId).then(data => {
            this.props.setOneCourse({ data });
        })
    }
    render() {

        return <>
            <OneCourse oneCourse={this.props.oneCourse}
                addStudentCourse={this.props.addStudentCourse}
                studentData={this.props.studentData}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        oneCourse: state.coursesPage.oneCourse,
        studentData: state.student.courses
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        setOneCourse: (courses) => {
            dispatch(setOneCourseAC(courses));
        },
        addStudentCourse: (courseId, del) => {
            dispatch(addStudentCourse(courseId, del));
        }
    }
}

let WithUrlDataOneContainerComponent = withRouter(OneCourseContainer);

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(WithUrlDataOneContainerComponent)
