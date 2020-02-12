import React from "react";
import {connect} from "react-redux";
import * as moduleService from "../../../services/ModuleService";
import * as moduleActions from "../../../actions/moduleActions";


class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }

    render() {
        return (
            <ul>
                {this.props.modules && this.props.modules.map(module =>
                    <li key={module._id}>
                        <button onClick={
                            () => this.props.deleteModule(module._id)}>
                            Delete
                        </button>
                        {module.title}
                    </li>
                )}
                <li>
                    <button onClick={
                        () => this.props.createModule(this.props.courseId)}>
                        Create</button>
                </li>
            </ul>
        );
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch(moduleActions.findModuleForCourse(actualModules))),
        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(moduleActions.deleteModule(moduleId))),
        createModule: (courseId) => {
            moduleService.createModule(courseId).then(
                module=>dispatch(moduleActions.createModule(module))
            )
        }
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)
