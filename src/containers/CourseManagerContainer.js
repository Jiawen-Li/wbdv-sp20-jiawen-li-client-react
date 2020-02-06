import React from "react";
import CourseTableComponent from "../component/CourseTableComponent";
import CourseGridComponent from "../component/CourseGridComponent";
import CourseEditorComponent from "../component/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse, updateCourse} from "../services/CourseService";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: '',
        courses: [],
        editorTitle: ""
    }

    componentDidMount = async () => {
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    }

    toggle = () =>
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        })

    updateCourse= async (courseId,course)=>{
        await updateCourse(courseId,course);
        const newcourses = await findAllCourses();
        this.setState({
            courses: newcourses
        })

    }

    deleteCourse = async (courseid) => {
        await deleteCourse(courseid);
        const newcourses = await findAllCourses()
        this.setState({
            courses: newcourses
        })
    }

    changeEditorTitle = (title) => {
        this.setState({
            editorTitle: title
        })
    }

    addCourse = async () => {
        await createCourse({
            title: this.state.newCourseTitle
        })

        this.setState({
            courses: await findAllCourses(),
            newCourseTitle: ""
        })
    }

    showEditor = () =>
        this.setState({
            showEditor: true
        })

    hideEditor = () =>
        this.setState({
            showEditor: false
        })


    render() {
        return (
            <div>

                <h1>Course Manager</h1>

                {
                    this.state.showEditor &&
                    <CourseEditorComponent
                        editorCourseTitle={this.state.editorTitle}
                        hideEditor={this.hideEditor}
                    />
                }

                {
                    !this.state.showEditor &&
                    <div>
                        <span>Please Input the Course You Want to Add: </span>
                        <input
                            onChange={(e) => this.setState({
                                newCourseTitle: e.target.value
                            })}
                            value={this.state.newCourseTitle}/>
                        <button onClick={this.addCourse}>Add Course</button>
                        {
                            this.state.layout === 'table' &&
                            <CourseTableComponent
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                courses={this.state.courses}
                                change={this.changeEditorTitle}
                                toggle={this.toggle}/>
                        }
                        {
                            this.state.layout === 'grid'
                            && <CourseGridComponent
                                courses={this.state.courses}
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                change={this.changeEditorTitle}
                                toggle={this.toggle}
                            />
                        }
                    </div>
                }

            </div>
        )
    }
}

export default CourseManagerContainer
