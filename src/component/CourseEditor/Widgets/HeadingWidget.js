import React from "react";
import {connect} from "react-redux";
import * as widgetService from "../../../services/WidgetService";
import * as widgetActions from "../../../actions/widgetActions";


class HeadingWidget extends React.Component {

    editingView = () =>
        <>
            <span><h4>Heading Widget</h4></span>

            <div className={'row'}>

                <button><i className="fas fa-arrow-up"></i></button>
                <button><i className="fas fa-arrow-down"></i></button>

                <select value={this.props.widget.type} placeholder={'Heading'}
                        onChange={event => this.props.updateWidget(this.props.widget.id,{
                            ...this.props.widget,
                            type: event.target.value})
                        }>
                    <option value={'HEADING'}>Heading</option>
                    <option value={'PARAGRAPH'}>Paragraph</option>
                    <option value={'LIST'}>List</option>
                    <option value={'IMAGE'}>Image</option>
                </select>

                <button onChange={event => this.props.deleteWidget(this.props.widget.id)}>
                    <i className="fas fa-times"></i>
                </button>

            </div>

            <div className={'row'} style={{'margin-bottom': '10px', 'margin-top': '10px'}}>
                <input value={this.props.widget.value}
                       onChange={event => this.props.updateWidget(this.props.widget.id,{
                           ...this.props.widget,
                           value: event.target.value
                       })}
                       style={{'width': '600px'}}/>
            </div>

            <div className={'row'} style={{'margin-bottom': '10px'}}>
                <select placeholder={'Choose size'} value={this.props.widget.size}
                        onChange={event => this.props.updateWidget(this.props.widget.id,{
                            ...this.props.widget,
                            size: event.target.value
                        })}
                        style={{'width': '600px'}}>
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
            </div>

            <div className={'row'} style={{'margin-bottom': '10px'}}>
                <input placeholder={'Widget name'} value={this.props.widget.name} onChange={event =>
                    this.props.updateWidget(this.props.widget.id, {
                        ...this.props.widget,
                        name: event.target.value
                    })
                } style={{'width': '600px'}}/>
            </div>

        </>

    heading = (widget) => {
        switch (widget.size) {
            case "Heading 1":
                return <h1>{widget.value}</h1>
            case "Heading 2":
                return <h2>{widget.value}</h2>
            case "Heading 3":
                return <h3>{widget.value}</h3>
            case "Heading 4":
                return <h4>{widget.value}</h4>
            case "Heading 5":
                return <h5>{widget.value}</h5>
            case "Heading 6":
                return <h6>{widget.value}</h6>
            default:
                return <h1>{widget.value}</h1>
        }
    }

    preview = () =>
        <div>
            <h1>Preview</h1>
            {this.heading(this.props.widget)}
        </div>

    render() {
        return (
            <li className={'list-group-item'}>
                {this.editingView()}
                {!this.props.editing && this.preview()}
            </li>
        );
    }
}

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
        }
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(HeadingWidget)