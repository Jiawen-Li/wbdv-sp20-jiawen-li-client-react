import React from "react";

class GridRow extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return (
            <div class='card'>
                <div class='card-body'>
                    {
                        !this.state.editing &&
                        <h5 class='card-title' onClick={
                            () => {
                                this.props.showEditor();
                                this.props.changeEditorTitle(this.state.course.title);
                            }
                        } href="#" scope='row'>
                            <i className="fas fa-book mx-2"></i>
                            {this.state.course.title}
                        </h5>
                    }

                    {this.state.editing && <h5 class='card-title'><input onChange={(event => {
                        this.setState({
                            course: {
                                ...this.state.course,
                                title: event.target.value
                            }
                        })
                    })}/></h5>}

                    <p class='card-text'>
                        This is a course info.
                    </p>

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
                </div>
            </div>

        )
    }

}

export default GridRow


