import {
    CHANGE_MODULE_EDITING_CONTENT,
    CHANGE_MODULE_EDITING_STATUS,
    CREATE_MODULE,
    DELETE_MODULE,
    FIND_MODULE_FOR_COURSE, SAVE_MODULE,
    UPDATE_MODULE
} from "../actions/moduleActions";

const initialState = {
    modules: [],
    ifModuleEditingIndex: -1,
    moduleEditingContent: ""
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        // TODO: move all strings to constants
        case FIND_MODULE_FOR_COURSE:
            return {
                ...state,
                modules: action.modules
            }

        case CREATE_MODULE:
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }

        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }

        case UPDATE_MODULE:
            return {
                ...state,
                modules: state.modules.map(module => {
                    if (module._id === action.moduleId) {
                        return action.newModule
                    } else {
                        return module
                    }
                })
            }
        case CHANGE_MODULE_EDITING_STATUS:
            return {
                ...state,
                ifModuleEditingIndex: action.index,
                moduleEditingContent: action.editContent
            }
        case CHANGE_MODULE_EDITING_CONTENT:
            return {
                ...state,
                moduleEditingContent: action.content
            }

        case SAVE_MODULE:
            return {
                ...state,
                ifModuleEditingIndex:-1,
                moduleEditingContent:""
            }
        default:
            return state

    }
}

export default moduleReducer
