import {CREATE_MODULE, DELETE_MODULE, FIND_MODULE_FOR_COURSE, UPDATE_MODULE} from "../actions/moduleActions";

const initialState = {
    modules: []
}

const moduleReducer = (state = initialState, action) => {
    switch(action.type) {
        // TODO: move all strings to constants
        case FIND_MODULE_FOR_COURSE:
            return {
                modules: action.modules
            }

        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }

        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }

        case UPDATE_MODULE:
            return {
                modules: state.modules.map(module=>{
                    if(module._id===action.moduleId){
                        return action.newModule
                    }else {
                        return module
                    }
                })
            }

        default:
            return state
    }
}

export default moduleReducer
