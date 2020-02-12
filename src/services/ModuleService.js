export const createModule = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/courses/${courseId}/modules`, {
        method:'POST',
        body: JSON.stringify({"title":"New Module"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/courses/${courseId}/modules`)
        .then(response => response.json())


export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/modules/${moduleId}`, {
        method: "DELETE"
    })

export const updateModule = (moduleId,module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/modules/${moduleId}`,{
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createModule,
    deleteModule,
    findModuleForCourse,
    updateModule,
}
