import React from "react";
import {Link} from "react-router-dom";

class CourseRow extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return (
            <tr>
                {
                    !this.state.editing &&
                   <Link to={`/course-editor/${this.state.course._id}`}>
                       <td scope='row'>
                        <i className="fas fa-book mx-2"></i>
                        {this.state.course.title}
                        </td>
                   </Link>
                }

                {this.state.editing && <td><input onChange={(event => {
                    this.setState({
                        course: {
                            ...this.state.course,
                            title: event.target.value
                        }
                    })
                })}/></td>}

                <td scope='col' className='d-none d-md-table-cell'>Me</td>

                <td scope='col' className='d-none d-md-table-cell'>01/01/2020</td>

                <td>
                    <button onClick={() => this.props.deleteCourse(this.state.course._id)}>Delete</button>
                    <button onClick={() => {
                        this.setState({editing: true})
                    }}>Edit
                    </button>
                    <button onClick={() => {
                        this.setState({editing: false})
                        this.props.updateCourse(this.state.course._id, this.state.course)
                    }}>Save
                    </button>
                </td>
            </tr>
        )
    }
}

export default CourseRow
