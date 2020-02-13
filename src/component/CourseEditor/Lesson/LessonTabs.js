import React from "react";
import {connect} from "react-redux";
import * as lessonService from "../../../services/LessonService";
import * as lessonActions from "../../../actions/lessonActions";


class LessonListComponent extends React.Component {
    componentDidMount() {
        this.props.findLessonForModule(this.props.moduleId)
    }

    render() {
        return (
            <ul>
                {this.props.lessons && this.props.lessons.map((lesson, index) =>
                    <li key={lesson._id}>
                        <button onClick={
                            () => this.props.deleteLesson(lesson._id)}>
                            Delete
                        </button>
                        {index !== this.props.ifLessonEditingIndex &&
                        <>
                            <button onClick={
                                () => this.props.editLesson(index, lesson.title)}>
                                Edit
                            </button>
                            {lesson.title}
                        </>}

                        {index == this.props.ifLessonEditingIndex &&
                        <>
                            <button onClick={
                                () =>
                                    this.props.saveLesson(
                                        lesson._id,
                                        {"title":this.props.lessonEditingContent}
                                    )
                            }>
                                save
                            </button>
                            <input value={this.props.lessonEditingContent}
                                   onChange={event => this.props.changeLesson(event.target.value)}/>
                        </>
                        }
                    </li>
                )}
                <li>
                    <button onClick={
                        () => this.props.createLesson(this.props.lessonId)}>
                        Create
                    </button>
                </li>
            </ul>
        );
    }
}

const stateToPropertyMapper = (state) => {
    return {
        ifLessonEditingIndex: state.lessons.ifLessonEditingIndex,
        lessons: state.lessons.lessons,
        lessonEditingContent: state.lessons.lessonEditingContent
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        findLessonForModule: (moduleId) =>
            lessonService.findLessonsForModule(moduleId)
                .then(actualLessons => dispatch(lessonActions.findLessonForModule(actualLessons))),

        deleteLesson: (lessonId) =>
            lessonService.deleteLesson(lessonId)
                .then(status =>
                    dispatch(lessonActions.deleteLesson(lessonId))),

        createLesson: (lessonId) => {
            lessonService.createLesson(lessonId).then(
                lesson => dispatch(lessonActions.createLesson(lesson))
            )
        },

        editLesson: (index, content) => {
            dispatch(lessonActions.changeLessonEditingStatus(index, content))
        },

        saveLesson: (lessonId, lesson) => {
            lessonService.updateLesson(lessonId, lesson).then(
                r => {
                    dispatch(lessonService.updateLesson(lessonId, lesson));
                    dispatch(lessonActions.saveLesson())
                }
            )
        },

        changeLesson: (content) => {
            dispatch(lessonActions.changeLessonEditingContent(content))
        }

    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonListComponent)
