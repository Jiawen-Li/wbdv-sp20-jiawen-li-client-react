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
                <div class={'row'} style={{'margin-bottom':'10px'}}>
                    <span>
                        <button type={'button'} className={'btn btn-success'}>Save</button>
                    </span>
                    <span style={{'margin-right':'10px','margin-left':'10px','margin-top':'8px'}}> Preview </span>
                    <span style={{'margin-top':'8px'}}>
                        <i className="fas fa-eye-slash"></i>
                    </span>
                </div>


                {/*<div>*/}
                {/*    {*/}
                {/*        this.props.widget.type === "HEADING" &&*/}
                {/*        <HeadingWidget*/}
                {/*            editing={this.props.editing}*/}
                {/*            widget={this.props.widget}/>*/}
                {/*    }*/}
                {/*    {*/}
                {/*        this.props.widget.type === "PARAGRAPH" &&*/}
                {/*        <ParagraphWidget*/}
                {/*            editing={this.props.editing}*/}
                {/*            widget={this.props.widget}/>*/}
                {/*    }*/}
                {/*    {   this.props.editing &&*/}
                {/*    <span>*/}
                {/*        <button onClick={() =>*/}
                {/*            this.props.deleteWidget(this.props.widget.id)}>*/}
                {/*            X*/}
                {/*        </button>*/}
                {/*        <button onClick={() =>{*/}
                {/*            updateWidget(this.props.widget.id,this.props.widget);*/}
                {/*            this.props.save()*/}
                {/*        }}>*/}
                {/*            Save*/}
                {/*        </button>*/}
                {/*    </span>*/}
                {/*    }*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    {this.props.widgets &&*/}
                {/*    this.props.widgets.map(widget =>*/}
                {/*        <div key={widget.id}>*/}
                {/*            <Widget*/}
                {/*                save={this.save}*/}
                {/*                editing={this.state.editing}*/}
                {/*                deleteWidget={this.props.deleteWidget}*/}
                {/*                widget={widget}/>*/}

                {/*            {widget !== this.state.widget &&*/}
                {/*            <button onClick={() =>*/}
                {/*                this.setState({*/}
                {/*                    editing:true,*/}
                {/*                    widget: widget*/}
                {/*                })}>*/}
                {/*                ...*/}
                {/*            </button>*/}
                {/*            }*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*    }*/}
                {/*    <button onClick={() =>*/}
                {/*        this.props.createWidget(this.props.topicId)}>*/}
                {/*        +*/}
                {/*    </button>*/}
                {/*    <button onClick={() =>*/}
                {/*        this.save()}>*/}
                {/*        preview/ edit*/}
                {/*    </button>*/}
                {/*</div>*/}
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