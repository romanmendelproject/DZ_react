import React from 'react';
import { connect } from 'react-redux';
import Courses from './MyCourses';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class MyCoursesContainer extends React.Component {
    render() {
        return <>
            <Courses courses={this.props.courses}
                studentData={this.props.studentData} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        courses: state.coursesPage.courses,
        studentData: state.student.courses
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps)
)(MyCoursesContainer)
