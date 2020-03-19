import {WIDGET_SERVICE_URL} from "../constants";

export const createWidget = (topicId) =>
    fetch(`${WIDGET_SERVICE_URL}/api/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({
            name: "New Widget"
        }),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGET_SERVICE_URL}/api/topics/${topicId}/widgets`)
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_SERVICE_URL}/api/widgets/${widgetId}`, {
        method: "DELETE"
    });

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGET_SERVICE_URL}/api/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json());

export default {
    createWidget,
    deleteWidget,
    findWidgetsForTopic,
    updateWidget,
}
