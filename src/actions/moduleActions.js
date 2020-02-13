export const CREATE_MODULE = "CREATE_MODULE";
export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
});

export const DELETE_MODULE = "DELETE_MODULE";
export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
});


export const FIND_MODULE_FOR_COURSE = "FIND_MODULE_FOR_COURSE";
export const findModuleForCourse = (modules) => ({
    type: FIND_MODULE_FOR_COURSE,
    modules: modules
});

export const UPDATE_MODULE = "UPDATE_MODULE";
export const updateModule = (moduleId, newModule) => ({
    type: UPDATE_MODULE,
    moduleId: moduleId,
    newModule: newModule
});

export const CHANGE_MODULE_EDITING_STATUS = "CHANGE_MODULE_EDITING_STATUS";
export const changeModuleEditingStatus = (index, editContent) => ({
    type: CHANGE_MODULE_EDITING_STATUS,
    index: index,
    editContent: editContent
});

export const CHANGE_MODULE_EDITING_CONTENT = "CHANGE_MODULE_EDITING_CONTENT";
export const changeModuleEditingContent = (content) => ({
    type: CHANGE_MODULE_EDITING_CONTENT,
    content: content
});

export const SAVE_MODULE = "SAVE_MODULE";
export const saveModule=()=>({
    type: SAVE_MODULE
})