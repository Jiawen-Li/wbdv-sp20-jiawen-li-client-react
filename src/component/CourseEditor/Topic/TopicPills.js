import React from "react";
import {connect} from "react-redux";
import * as topicService from "../../../services/TopicService";
import * as topicActions from "../../../actions/topicActions";
import {Link} from "react-router-dom";


class TopicListComponent extends React.Component {
    componentDidMount() {
        this.props.findTopicForLesson(this.props.match.params.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.lessonId !== this.props.match.params.lessonId) {
            this.props.findTopicForLesson(this.props.match.params.lessonId);
        }

    }

    render() {
        return (
            <>
                <h2>Topic Pill Part</h2>
                <ul>
                    {this.props.topics && this.props.topics.map((topic, index) =>
                        <li key={topic.id}>
                            <button onClick={
                                () => this.props.deleteTopic(topic.id)}>
                                Delete
                            </button>
                            {index !== this.props.ifTopicEditingIndex &&
                            <>
                                <button onClick={
                                    () => this.props.editTopic(index, topic.title)}>
                                    Edit
                                </button>
                                <Link to={`/course-editor/${this.props.match.params.courseId}/module/${this.props.match.params.moduleId}/lesson/${this.props.match.params.lessonId}/topic/${topic.id}`}>
                                    {topic.title}
                                </Link>
                            </>}

                            {index == this.props.ifTopicEditingIndex &&
                            <>
                                <button onClick={
                                    () =>
                                        this.props.saveTopic(
                                            topic._id,
                                            {"title": this.props.topicEditingContent}
                                        )
                                }>
                                    save
                                </button>
                                <input value={this.props.topicEditingContent}
                                       onChange={event => this.props.changeTopic(event.target.value)}/>
                            </>
                            }
                        </li>
                    )}
                    <li>
                        <button onClick={
                            () => this.props.createTopic(this.props.match.params.lessonId)}>
                            Create
                        </button>
                    </li>
                </ul>
            </>

        );
    }
}

const stateToPropertyMapper = (state) => {
    return {
        ifTopicEditingIndex: state.topics.ifTopicEditingIndex,
        topics: state.topics.topics,
        topicEditingContent: state.topics.topicEditingContent
    }
}

const dispatchToPropertyMapper = (dispatch) => {
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

    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicListComponent)
