import React from "react";
import CourseRow from "../containers/CourseTableRowContainer";
import {updateCourse} from "../services/CourseService";

const CourseTableComponent = ({courses, deleteCourse, showEditor}) =>
    <div>
        <h4>Dear Student, you have {courses.length} courses in your list.</h4>
        <table class = 'table'>
            <thead class = 'thead-dark'>
                <tr>
                    <th scope='col'>
                        <span>Title </span>
                        <i className="fas fa-sort-up"></i>
                    </th>
                    <th scope='col'>Owned By</th>
                    <th scope='col'>Last Modified</th>
                    <th>
                        <i className="fas fa-th mx-2"></i>
                        <i className="fas fa-sort-alpha-down"></i>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    courses.map(function(course, index){
                        return (
                            <CourseRow
                                course={course}
                                showEditor={showEditor}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                        )
                    })
                }
            </tbody>

        </table>
    </div>

export default CourseTableComponent
