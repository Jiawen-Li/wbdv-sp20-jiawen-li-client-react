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
import Widget from "../CourseEditor/Widgets/WidgetList";
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
            <table class = 'table'>
                <thead class = 'thead-dark'>
                    <tr>
                        <th scope = 'col'>
                            <button onClick={() => history.push("/")}><i className="fas fa-times"></i></button>
                        </th>
                        <th>
                            Course Info for Course_ID =  {courseId}
                        </th>
                        <th>
                            <span style={{'color': 'gray'}}>Build</span>
                        </th>
                        <th>
                            <span>Pages</span>
                        </th>
                        <th>
                            <span style={{'color': 'gray'}}>Theme</span>
                        </th>
                        <th>
                            <span style={{'color': 'gray'}}>Store</span>
                        </th>
                        <th>
                            <span style={{'color': 'gray'}}>Apps</span>
                        </th>
                        <th>
                            <span style={{'color': 'gray'}}>Settings</span>
                        </th>
                        <th>
                            <span><i className="fas fa-plus"></i></span>
                        </th>
                    </tr>
                </thead>
            </table>

            <div class={'container'}>
                <div className="row">
                    <div className="col-5">
                        <ModuleListComponent
                            match={match}
                            courseId={courseId}/>
                    </div>
                    <div className="col-7">
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
        </div>
    </Provider>

export default CourseEditorComponent
