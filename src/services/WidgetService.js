import {WIDGET_SERVICE_URL} from "../constants";

export const createWidget = (tid) =>
    fetch(`${WIDGET_SERVICE_URL}/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify({
            name: "New Widget"
        }),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_SERVICE_URL}/api/widgets/${wid}`, {
        method: "DELETE"
    }).then(response => response.json());

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_SERVICE_URL}/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    });

export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGET_SERVICE_URL}/api/topics/${tid}/widgets`)
        .then(response => response.json())
;