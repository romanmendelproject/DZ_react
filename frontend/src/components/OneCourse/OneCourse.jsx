import React from 'react';


class Courses extends React.Component {

    render() {

        return <div>
            <h3>Course name: {this.props.oneCourse.title}</h3>
            <h3>Teacher: {this.props.oneCourse.teacher.user.first_name}{this.props.oneCourse.teacher.user.last_name}</h3>

            <h3>Students:</h3>
            {
                this.props.oneCourse.students.map(u => <div key={u.id}>
                    <div>{u.user.username}</div>
                </div>)
            }
            <div>
                <button onClick={() => {
                    this.props.addStudentCourse(
                        this.props.oneCourse.id,
                        false
                    )
                }}>Add Me</button>
                <button onClick={() => {
                    this.props.addStudentCourse(
                        this.props.oneCourse.id,
                        true
                    )
                }}>Delete Me</button>

            </div>
        </div>
    }
}


export default Courses;