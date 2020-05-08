import React from 'react';
import { connect } from 'react-redux';
import { setCoursesAC } from '../../redux/courses-reducer';
import Courses from './Courses';
import { coursesAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "react-router-dom";


class CoursesContainer extends React.Component {
    componentDidMount() {

        coursesAPI.getCourses().then(data => {
            this.props.setCourses({ data });
        });
    }
    render() {
        return <>
            <Courses courses={this.props.courses} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        courses: state.coursesPage.courses
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        setCourses: (courses) => {
            dispatch(setCoursesAC(courses));
        }

    }

}

let WithUrlDataContainerComponent = withRouter(CoursesContainer);

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(WithUrlDataContainerComponent)
