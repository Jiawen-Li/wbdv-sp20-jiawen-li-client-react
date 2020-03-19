import React from "react";
import {updateWidget} from "../../../actions/widgetActions";
import {connect} from "react-redux";
import * as topicService from "../../../services/TopicService";
import * as topicActions from "../../../actions/topicActions";

class ListWidget extends React.Component {

    editingView = () =>
        <>
            <span><h4>List Widget</h4></span>

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

                <button onChange={event => this.props.deleteWidget(this.props.widget.id)}>
                    <i className="fas fa-times"></i>
                </button>

            </div>

            <textarea className={'row'}
                      style={{'margin-bottom': '10px', 'margin-top': '10px'}}
                      value={this.props.widget.value}
                      placeholder={'Put each item in a separate row'}
                      onChange={event => this.props.updateWidget(this.props.widget.id, {
                          ...this.props.widget,
                          value: event.target.value
                      })}>
                    </textarea>

            <div className={'row'} style={{'margin-bottom': '10px'}}>
                <select value={this.props.widget.order} style={{'width': '600px'}}
                        onChange={event => this.props.updateWidget(this.props.widget.id, {
                            ...this.props.widget,
                            order: event.target.value
                        })}>
                    <option value={0}>Unordered list</option>
                    <option value={1}>Ordered list</option>
                </select>
            </div>

            <div className={'row'} style={{'margin-bottom': '10px'}}>
                <input placeholder={'Widget name'} style={{'width': '600px'}}
                       onChange={event => this.props.updateWidget(this.props.widget.id, {
                           ...this.props.widget,
                           name: event.target.value
                       })}/>
            </div>

        </>


    orderingList = () => {
        switch (this.props.widget.order) {
            case 0:
                return <ul>
                    {this.props.widget.value.split("\n").map(row =>
                        <li>{row}</li>)}
                </ul>;
            case 1:
                return <ol>
                    {this.props.widget.value.split("\n").map(row =>
                        <li>{row}</li>)}
                </ol>;
            default:
                return <ul>
                    {this.props.widget.value.split("\n").map(row =>
                        <li>{row}</li>)}
                </ul>;
        }
    };


    preview = () =>
        <div>
            <h1>Preview</h1>
            {this.orderingList(this.props.widget.value)}
        </div>

    render() {
        return (
            <li className={'list-group-item'}>
                {this.editingView()}
                {!this.props.editing && this.preview()}
            </li>
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => ({
    // updateWidget: (wid, newWidget) => dispatch(updateWidget(wid, newWidget))
    return {

        findTopicForLesson: (lessonId) =>
            topicService.findTopicsForLesson(lessonId)
                .then(actualTopics => dispatch(topicActions.findTopicForLesson(actualTopics))),

        deleteTopic: (topicId) =>
            topicService.deleteTopic(topicId)
                .then(status =>
                    dispatch(topicActions.deleteTopic(topicId))),

        createTopic: (topicId) => {
            topicService.createTopic(topicId).then(
                topic => dispatch(topicActions.createTopic(topic))
            )
        },

        editTopic: (index, content) => {
            dispatch(topicActions.changeTopicEditingStatus(index, content))
        },

        saveTopic: (topicId, topic) => {
            topicService.updateTopic(topicId, topic).then(
                r => {
                    dispatch(topicActions.updateTopic(topicId, topic));
                    dispatch(topicActions.saveTopic())
                }
            )
        },

        changeTopic: (content) => {
            dispatch(topicActions.changeTopicEditingContent(content))
        }
    }})

export default connect(
    null,
    dispatchToPropertyMapper)
(ListWidget)

