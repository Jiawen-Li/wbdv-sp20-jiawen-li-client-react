import React from "react";
import ModuleListComponent from "./module/ModuleListComponent";
import LessonTabs from "./Lesson/LessonTabs";
import TopicPills from "./Topic/TopicPills";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";
import WidgetList from "./Widgets/WidgetList";
import WidgetListComponent from "./WidgetListComponent";
import widgetReducer from "../../reducers/WidgetReducer";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const CourseEditorComponent = ({history, courseId, match, moduleId, lessonId}) =>
    <Provider store={store}>
        <div>
            <Link to="/">Back</Link>
            <button onClick={() => history.push("/")}>Close</button>
            <h3>Course Editor {courseId}</h3>

            <div className="row">
                <div className="col-4">
                    <ModuleListComponent
                        match={match}
                        courseId={courseId}/>
                </div>
                <div className="col-4">
                    {match.params.moduleId &&
                    <LessonTabs
                        moduleId={moduleId}
                        match={match}/>
                    }

                    {match.params.lessonId &&
                    <TopicPills
                        match={match}
                        lessonId={lessonId}
                        moduleId={moduleId}
                        courseId={courseId}/>

                    }

                    {match.params.topicId &&
                    <WidgetListComponent
                        match={match}
                        topicId={match.params.topicId}/>}
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent
