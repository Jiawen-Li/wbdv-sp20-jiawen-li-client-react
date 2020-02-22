import {WIDGET_SERVICE_URL} from "../constants";


export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_SERVICE_URL}/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    });