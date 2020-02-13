export const CREATE_TOPIC = "CREATE_TOPIC";
export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
});

export const DELETE_TOPIC = "DELETE_TOPIC";
export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
});


export const FIND_TOPIC_FOR_LESSON = "FIND_TOPIC_FOR_LESSON";
export const findTopicForLesson = (topics) => ({
    type: FIND_TOPIC_FOR_LESSON,
    topics: topics
});

export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const updateTopic = (topicId, newTopic) => ({
    type: UPDATE_TOPIC,
    topicId: topicId,
    newTopic: newTopic
});

export const CHANGE_TOPIC_EDITING_STATUS = "CHANGE_TOPIC_EDITING_STATUS";
export const changeTopicEditingStatus = (index, editContent) => ({
    type: CHANGE_TOPIC_EDITING_STATUS,
    index: index,
    editContent: editContent
});

export const CHANGE_TOPIC_EDITING_CONTENT = "CHANGE_TOPIC_EDITING_CONTENT";
export const changeTopicEditingContent = (content) => ({
    type: CHANGE_TOPIC_EDITING_CONTENT,
    content: content
});

export const SAVE_TOPIC = "SAVE_TOPIC";
export const saveTopic=()=>({
    type: SAVE_TOPIC
})