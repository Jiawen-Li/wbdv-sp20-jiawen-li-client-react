import React from "react";
import GridRow from "../containers/CourseGridCardContainer";
import {Link} from "react-router-dom";

const CourseGridComponent = ({courses, deleteCourse, updateCourse,showEditor,change,toggle}) =>
    <div className={'container'}>
        <h4>
            <span>This is a table in grid form.</span>
            <Link to={"/table"}><i className="fas fa-list float-right"></i></Link>
        </h4>

        <div className={"container"}>
            <div className={"row"}>
                <div className={"col mb-4"}>
                    {
                        courses.map(function (course) {
                            return (
                                <GridRow
                                    course={course}
                                    showEditor={showEditor}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    changeEditorTitle={change}
                                    key={course._id}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>

export default CourseGridComponent