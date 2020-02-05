import React from "react";

class CourseRow extends React.Component {
    state = {
        editing: false
    }

    render() {
        return (
            <tr>
                {
                    !this.state.editing &&
                    <td onClick={this.props.showEditor} href="#" scope='row'>
                        <i className="fas fa-book mx-2"></i>
                        {this.props.course.title}
                    </td>
                }

                {this.state.editing && <td><input/></td>}

                <td>Me</td>

                <td>01/01/2020</td>

                <td>
                    <button onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                    <button onClick={() => {this.setState({editing: true})}}>Edit</button>
                    <button onClick={() => {
                        this.setState({editing: false})
                        this.props.updateCourse(this.props.course)
                    }}>Save</button>
                </td>
            </tr>
        )
    }
}

export default CourseRow
