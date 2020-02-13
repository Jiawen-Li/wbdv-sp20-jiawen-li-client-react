export const createTopic = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/lessons/${lessonId}/topics`, {
        method:'POST',
        body: JSON.stringify({"title":"New Topic"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/lessons/${lessonId}/topics`)
        .then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/topics/${topicId}`, {
        method: "DELETE"
    })

export const updateTopic = (topicId,topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001059598/topics/${topicId}`,{
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createTopic,
    deleteTopic,
    findTopicsForLesson,
    updateTopic,
}
