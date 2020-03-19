import {
    CHANGE_WIDGET_EDITING_CONTENT,
    CHANGE_WIDGET_EDITING_STATUS,
    CREATE_WIDGET,
    DELETE_WIDGET,
    SAVE_WIDGET,
    UPDATE_WIDGET,
    FIND_ALL_WIDGETS_FOR_TOPIC
} from "../actions/widgetActions";


const initialState = {
    widgets: [],
    ifWidgetEditingIndex: -1,
    WidgetEditingContent: ""
}


const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        // TODO: use constants and actions
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            };

        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };

        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.widgetId) {
                        return action.newWidget
                    } else {
                        return widget
                    }
                })
            };

        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            };

        case CHANGE_WIDGET_EDITING_STATUS:
            return {
                ...state,
                ifWidgetEditingIndex: action.index,
                WidgetEditingContent: action.editContent
            };

        case CHANGE_WIDGET_EDITING_CONTENT:
            return {
                ...state,
                WidgetEditingContent: action.editContent
            };

        case SAVE_WIDGET:
            return {
                ...state,
                ifWidgetEditingIndex: -1,
                WidgetEditingContent: ""
            };

        default:
            return state;
    }
}

export default widgetReducer