import {
    CHANGE_LESSON_EDITING_CONTENT,
    CHANGE_LESSON_EDITING_STATUS,
    CREATE_LESSON,
    DELETE_LESSON,
    FIND_LESSON_FOR_MODULE,
    SAVE_LESSON,
    UPDATE_LESSON
} from "../actions/lessonActions";

const initialState = {
    lessons: [],
    ifLessonEditingIndex: -1,
    lessonEditingContent: ""
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        // TODO: move all strings to constants
        case FIND_LESSON_FOR_MODULE:
            return {
                ...state,
                lessons: action.lessons
            }

        case CREATE_LESSON:
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }

        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }

        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.lessonId) {
                        return action.newLesson
                    } else {
                        return lesson
                    }
                })
            }
        case CHANGE_LESSON_EDITING_STATUS:
            return {
                ...state,
                ifLessonEditingIndex: action.index,
                lessonEditingContent: action.editContent
            }
        case CHANGE_LESSON_EDITING_CONTENT:
            return {
                ...state,
                lessonEditingContent: action.content
            }

        case SAVE_LESSON:
            return {
                ...state,
                ifLessonEditingIndex:-1,
                lessonEditingContent:""
            }
        default:
            return state

    }
}

export default lessonReducer

