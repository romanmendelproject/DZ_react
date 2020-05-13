import React from 'react';


class Courses extends React.Component {

    render() {

        return <div>
            <h3>Course name: <span>{this.props.oneCourse.title}</span></h3>
            <h3>Teacher: <h2>{this.props.oneCourse.teacher.user.first_name}{this.props.oneCourse.teacher.user.last_name}</h2></h3>

            <h3>Students:</h3>
            <ul>
                {
                    this.props.oneCourse.students.map(u => <div key={u.id}>

                        <li>{u.user.username}</li>

                    </div>)
                }
            </ul>
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