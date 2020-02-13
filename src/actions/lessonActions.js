export const CREATE_LESSON = "CREATE_LESSON";
export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    newLesson: lesson
});

export const DELETE_LESSON = "DELETE_LESSON";
export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
});


export const FIND_LESSON_FOR_MODULE = "FIND_LESSON_FOR_MODULE";
export const findLessonForModule = (lessons) => ({
    type: FIND_LESSON_FOR_MODULE,
    lessons: lessons
});

export const UPDATE_LESSON = "UPDATE_LESSON";
export const updateLesson = (lessonId, newLesson) => ({
    type: UPDATE_LESSON,
    lessonId: lessonId,
    newLesson: newLesson
});

export const CHANGE_LESSON_EDITING_STATUS = "CHANGE_LESSON_EDITING_STATUS";
export const changeLessonEditingStatus = (index, editContent) => ({
    type: CHANGE_LESSON_EDITING_STATUS,
    index: index,
    editContent: editContent
});

export const CHANGE_LESSON_EDITING_CONTENT = "CHANGE_LESSON_EDITING_CONTENT";
export const changeLessonEditingContent = (content) => ({
    type: CHANGE_LESSON_EDITING_CONTENT,
    content: content
});

export const SAVE_LESSON = "SAVE_LESSON";
export const saveModule=()=>({
    type: SAVE_LESSON
})