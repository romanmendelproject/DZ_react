import React from 'react';
import { NavLink } from "react-router-dom";


class Courses extends React.Component {
    render() {
        return <div>
            <h3>Course list:</h3>
            {
                this.props.courses.map(u => <div key={u.id}>
                    <NavLink to={"/course/" + u.id}>{u.title}</NavLink>
                </div>)
            }
        </div>
    }
}


export default Courses;