import {
    CREATE_WIDGET,
    DELETE_WIDGET,
    UPDATE_WIDGET,
    FIND_ALL_WIDGETS_FOR_TOPIC
} from "../actions/widgetActions";


const initialState = {
    widgets: []
}


const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        // TODO: use constants and actions
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
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
                    if (widget._id === action.widgetId) {
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

        default:
            return state;
    }
}

export default widgetReducer