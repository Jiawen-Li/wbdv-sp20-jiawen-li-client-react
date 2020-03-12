import {WIDGET_SERVICE_URL} from "../constants";

export const createTopic = (lessonId) =>
    fetch(`${WIDGET_SERVICE_URL}/api/lessons/${lessonId}/topics`, {
        method:'POST',
        body: JSON.stringify({"title":"New Topic"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${WIDGET_SERVICE_URL}/api/lessons/${lessonId}/topics`)
        .then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch(`${WIDGET_SERVICE_URL}/api/topics/${topicId}`, {
        method: "DELETE"
    })

export const updateTopic = (topicId,topic) =>
    fetch(`${WIDGET_SERVICE_URL}/api/topics/${topicId}`,{
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export default {
    createTopic,
    deleteTopic,
    findTopicsForLesson,
    updateTopic,
}
