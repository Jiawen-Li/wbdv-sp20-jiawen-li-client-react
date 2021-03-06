import React from "react";
import * as widgetActions from "../../../actions/widgetActions";
import {connect} from "react-redux";
import * as widgetService from "../../../services/WidgetService";

class ParagraphWidget extends React.Component {

    editingView = () =>
        <>
            <span><h4>{this.props.widget.name}</h4></span>

            <div className={'row'}>

                <button><i className="fas fa-arrow-up"></i></button>
                <button><i className="fas fa-arrow-down"></i></button>

                <select value={this.props.widget.type}
                        placeholder={'Paragraph'}
                        onChange={event => this.props.updateWidget(this.props.widget.id, {
                            ...this.props.widget,
                            type: event.target.value
                        })}>
                    <option value={'HEADING'}>Heading</option>
                    <option value={'PARAGRAPH'}>Paragraph</option>
                    <option value={'LIST'}>List</option>
                    <option value={'IMAGE'}>Image</option>
                </select>

                <button onClick={event => this.props.deleteWidget(this.props.widget.id)}>
                    <i className="fas fa-times"></i>
                </button>

            </div>

            <textarea className={'row'}
                      style={{'margin-bottom': '10px', 'margin-top': '10px'}}
                      value={this.props.widget.value}
                      onChange={event => this.props.updateWidget(this.props.widget.id, {
                          ...this.props.widget,
                          value: event.target.value
                      })}>
                    </textarea>

            <div className={'row'} style={{'margin-bottom': '10px'}}>
                <input placeholder={'Widget name'} style={{'width': '600px'}}
                       value={this.props.widget.name}
                       onChange={event => this.props.updateWidget(this.props.widget.id,{
                           ...this.props.widget,
                           name: event.target.value
                           }
                       )}/>
            </div>

        </>

    preview = () =>
        <div>
            <h1>Preview</h1>
            <h3>{this.props.widget.value}</h3>
        </div>

    render() {
        return (
            <li className={'list-group-item'}>
                {this.editingView()}
                {!this.props.editing && this.preview()}
            </li>

        )
    }
};


const stateToPropertyMapper = (state) => {
    return {
        ifWidgetEditingIndex: state.widgets.ifWidgetEditingIndex,
        widgets: state.widgets.widgets,
        widgetEditingContent: state.widgets.widgetEditingContent
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        findWidgetForTopic: (topicId) =>
            widgetService.findWidgetsForTopic(topicId)
                .then(actualWidgets => dispatch(widgetActions.findWidgetForTopic(actualWidgets))),

        deleteWidget: (widgetId) =>
            widgetService.deleteWidget(widgetId)
                .then(status =>
                    dispatch(widgetActions.deleteWidget(widgetId))),

        createWidget: (widgetId) => {
            widgetService.createWidget(widgetId).then(
                widget => dispatch(widgetActions.createWidget(widget))
            )
        },

        editWidget: (index, content) => {
            dispatch(widgetActions.changeWidgetEditingStatus(index, content))
        },

        saveWidget: (widgetId, widget) => {
            widgetService.updateWidget(widgetId, widget).then(
                r => {
                    dispatch(widgetActions.updateWidget(widgetId, widget));
                    dispatch(widgetActions.saveWidget())
                }
            )
        },

        changeWidget: (content) => {
            dispatch(widgetActions.changeWidgetEditingContent(content))
        },

        updateWidget: (widgetId,widget) =>
            dispatch(widgetActions.updateWidget(widgetId,widget))
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ParagraphWidget)