import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./Widgets/HeadingWidget";
import ParagraphWidget from "./Widgets/ParagraphWidget";
import Widget from "../CourseEditor/Widgets/WidgetList";
import {FIND_ALL_WIDGETS_FOR_TOPIC} from "../../actions/widgetActions";
import {WIDGET_SERVICE_URL} from "../../constants";
import * as widgetService from "../../services/WidgetService";
import * as widgetAction from '../../actions/widgetActions'
import {updateWidget} from "../../services/WidgetService";
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
                    editing={this.stats.editing}
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

const dispatchToPropertyMapper = (dispatch) => ({
    createWidget: (tid) =>
       widgetService.createWidget(tid)
            .then(actualWidget => dispatch(widgetAction.createWidget(actualWidget))),

    deleteWidget: (wid) =>
        widgetService.deleteWidget(wid)
            .then(status => dispatch(widgetAction.deleteWidget(wid))),

    findWidgetsForTopic: (tid) =>
        widgetService.findWidgetsForTopic(tid)
            .then(widgets => dispatch(widgetAction.findWidgetForTopic(widgets))
            ),

    // findAllWidgets: () =>
    //     fetch('${WIDGET_SERVICE_URL}/api/widgets')
    //         .then(response => response.json())
    //         .then(widgets => dispatch({
    //             type: "FIND_ALL_WIDGETS",
    //             widgets: widgets
    //         }))
})

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetListComponent)