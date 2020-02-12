import React from "react";
import CourseRow from "../containers/CourseTableRowContainer";
import {Link} from "react-router-dom";

const CourseTableComponent = ({courses, deleteCourse,updateCourse, showEditor, change, toggle}) =>
    <div>
        <h4>Dear Student, you have {courses.length} courses in your list.</h4>
        <table class = 'table'>
            <thead class = 'thead-dark'>
                <tr>
                    <th scope='col'>
                        <span>Title </span>
                        <i className="fas fa-sort-up"></i>
                    </th>
                    <th scope='col' className='d-none d-md-table-cell'>Owned By</th>
                    <th scope='col' className='d-none d-md-table-cell'>Last Modified</th>
                    <th>
                        <Link to={"/grid"}><i className="fas fa-th mx-2"></i></Link>
                        <i className="fas fa-sort-alpha-down"></i>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    courses.map(function(course){
                        return (
                            <CourseRow
                                course={course}
                                showEditor={showEditor}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                                changeEditorTitle={change}
                                key={course._id}/>
                        )
                    })
                }
            </tbody>

        </table>
    </div>

export default CourseTableComponent
