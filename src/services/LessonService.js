export const createLesson = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/modules/${moduleId}/lessons`, {
        method:'POST',
        body: JSON.stringify({"title":"New Lesson"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/modules/${moduleId}/lessons`)
        .then(response => response.json())


export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/lessons/${lessonId}`, {
        method: "DELETE"
    })

export const updateLesson = (lessonId,lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/lessons/${lessonId}`,{
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createLesson,
    deleteLesson,
    findLessonsForModule,
    updateLesson,
}
