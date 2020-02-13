import {
    CHANGE_TOPIC_EDITING_CONTENT,
    CHANGE_TOPIC_EDITING_STATUS,
    CREATE_TOPIC,
    DELETE_TOPIC,
    FIND_TOPIC_FOR_LESSON,
    SAVE_TOPIC,
    UPDATE_TOPIC
} from "../actions/topicActions";

const initialState = {
    topics: [],
    ifTopicEditingIndex: -1,
    TopicEditingContent: ""
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        // TODO: move all strings to constants
        case FIND_TOPIC_FOR_LESSON:
            return {
                ...state,
                topics: action.topics
            }

        case CREATE_TOPIC:
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }

        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }

        case UPDATE_TOPIC:
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic._id === action.topicId) {
                        return action.newTopic
                    } else {
                        return topic
                    }
                })
            }
        case CHANGE_TOPIC_EDITING_STATUS:
            return {
                ...state,
                ifTopicEditingIndex: action.index,
                topicEditingContent: action.editContent
            }
        case CHANGE_TOPIC_EDITING_CONTENT:
            return {
                ...state,
                topicEditingContent: action.content
            }

        case SAVE_TOPIC:
            return {
                ...state,
                ifTopicEditingIndex:-1,
                topicEditingContent:""
            }
        default:
            return state

    }
}

export default topicReducer

