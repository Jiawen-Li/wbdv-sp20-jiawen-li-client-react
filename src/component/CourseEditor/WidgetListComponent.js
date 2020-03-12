import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./Widgets/HeadingWidget";
import ParagraphWidget from "./Widgets/ParagraphWidget";
import Widget from "./Widgets/WidgetList";
import {FIND_ALL_WIDGETS_FOR_TOPIC} from "../../actions/widgetActions";
import {WIDGET_SERVICE_URL} from "../../constants";
import * as widgetService from "../../services/WidgetService";
import * as widgetAction from '../../actions/widgetActions'

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
        editing:false,
        widget: {}
    }

    // save = () => {
    //     this.setState({
    //         editing:false,
    //         widget: {}
    //     })
    // }

    save = () => {
        this.setState(prev=>({
            editing:!prev.editing,
            widget: {}
        }))
    }

    render() {
        return (
            <div>
                <h2>Widget List</h2>
                {this.props.widgets &&
                this.props.widgets.map(widget =>
                    <div key={widget.id}>
                        <Widget
                            save={this.save}
                            editing={this.state.editing}
                            deleteWidget={this.props.deleteWidget}
                            widget={widget}/>

                        {widget !== this.state.widget &&
                        <button onClick={() =>
                            this.setState({
                                editing:true,
                                widget: widget
                            })}>
                            ...
                        </button>
                        }
                    </div>
                )
                }
                <button onClick={() =>
                    this.props.createWidget(this.props.topicId)}>
                    +
                </button>
                <button onClick={() =>
                    this.save()}>
                    preview/ edit
                </button>
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
            .then(widgets => console.log(widgets)
                // dispatch(widgetAction.findWidgetForTopic(widgets))
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