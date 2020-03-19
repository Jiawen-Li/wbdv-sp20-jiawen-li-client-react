import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./Widgets/HeadingWidget";
import ParagraphWidget from "./Widgets/ParagraphWidget";
import * as widgetActions from "../../actions/widgetActions";
import {WIDGET_SERVICE_URL} from "../../constants";
import * as widgetService from "../../services/WidgetService";
import ListWidget from "./Widgets/ListWidget";
import ImageWidget from "./Widgets/ImageWidget";

class WidgetListComponent extends React.Component {
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
        }
    }

    state = {
        editing:true,
        widget: {}
    }

    view = () => {
        this.setState({
            editing:!this.state.editing,
            widget: {}
        })
    }


    widgetSwitch=(widget)=>{
        switch (widget.type) {
            case "HEADING":
                return <HeadingWidget
                    editing={this.state.editing}
                    widget={widget}/>
            case "PARAGRAPH":
                return <ParagraphWidget
                    editing={this.state.editing}
                    widget={widget}/>
            case "LIST":
                return <ListWidget
                    editing={this.state.editing}
                    widget={widget}/>
            case "IMAGE":
                return <ImageWidget
                    editing={this.state.editing}
                    widget={widget}/>
            default:
                return <HeadingWidget
                    editing={this.state.editing}
                    widget={widget}/>
        }
    }

    render() {
        return (
            <div>
                <h2>Widget List</h2>

                <div className={'row'} style={{'margin-bottom':'10px'}}>

                    <button onClick={
                        () => this.props.createWidget(this.props.match.params.topicId)}>
                        <i className="fas fa-plus"></i>
                    </button>

                    <span>
                        <button type={'button'} className={'btn btn-success'}
                                onClick={() =>{
                                    this.props.widgets.map(widget=>updateWidget(widget.id,widget))}}>
                            Save
                        </button>
                    </span>

                    {this.state.editing &&
                    <span style={{'margin-top':'8px'}}>
                        <button onClick={() =>{
                                    this.view()}}>Preview</button>
                    </span>}

                    {!this.state.editing &&
                    <span style={{'margin-top':'8px'}}>
                        <button onClick={() =>{
                            this.view()}}>Edit</button>
                    </span>}

                </div>

                <ul className={'list-group'} style={{'margin-bottom':'10px'}}>
                    {this.props.widgets &&
                        this.props.widgets.map(widget=>this.widgetSwitch(widget))
                    }
                </ul>
            </div>
        )
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
(WidgetListComponent)