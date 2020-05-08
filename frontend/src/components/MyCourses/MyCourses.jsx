import React from 'react';


class Courses extends React.Component {
    render() {
        return <div>
            <h3>My Courses list:</h3>
            {
                this.props.courses.map(u => <div key={u.id}>
                    {this.props.studentData.courses.indexOf(u.id) != -1
                        ? <div>{u.title}</div>
                        : <div></div>
                    }
                </div>)
            }
        </div>
    }
}


export default Courses;