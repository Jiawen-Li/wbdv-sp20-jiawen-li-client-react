import React from "react";
import GridRow from "../containers/CourseGridCardContainer";
import {updateCourse} from "../services/CourseService";

const CourseGridComponent = ({courses, deleteCourse, showEditor,change,toggle}) =>
    <div className={'container'}>
        <h4>
            <span>This is a table in grid form.</span>
            <i className="fas fa-list float-right" onClick={toggle}></i>
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