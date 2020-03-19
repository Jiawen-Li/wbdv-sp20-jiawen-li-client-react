export const CREATE_WIDGET = "CREATE_WIDGET";
export const createWidget = (widget) => ({
    type: CREATE_WIDGET,
    newWidget: widget
});

export const DELETE_WIDGET = "DELETE_WIDGET";
export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
});

export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const updateWidget = (widgetId, newWidget) => ({
    type: UPDATE_WIDGET,
    widgetId: widgetId,
    newWidget: newWidget
});

export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC";
export const findWidgetForTopic = (widgets) => ({
    type: FIND_ALL_WIDGETS_FOR_TOPIC,
    widgets: widgets
});

export const CHANGE_WIDGET_EDITING_STATUS = "CHANGE_WIDGET_EDITING_STATUS";
export const changeWidgetEditingStatus = (index, editContent) => ({
    type: CHANGE_WIDGET_EDITING_STATUS,
    index: index,
    editContent: editContent
});

export const CHANGE_WIDGET_EDITING_CONTENT = "CHANGE_WIDGET_EDITING_CONTENT";
export const changeWidgetEditingContent = (content) => ({
    type: CHANGE_WIDGET_EDITING_CONTENT,
    content: content
});

// export const WIDGET_POSITION_UP = "WIDGET_POSITION_UP";
// export const widgetPositionUp = () => ({
//     type: WIDGET_POSITION_UP
// })
//
// export const WIDGET_POSITION_DOWN = "WIDGET_POSITION_DOWN";
// export const widgetPositionDown = () => ({
//     type: WIDGET_POSITION_DOWN
// })
//
// export const PREVIEW_ON = "PREVIEW_ON";
// export const previewOn = () => ({
//     type: PREVIEW_ON
// })
//
// export const PREVIEW_OFF = "PREVIEW_OFF";
// export const previewOff = () => ({
//     type: PREVIEW_OFF
// })

export const SAVE_WIDGET = "SAVE_WIDGET";
export const saveWidget=()=>({
    type: SAVE_WIDGET
})