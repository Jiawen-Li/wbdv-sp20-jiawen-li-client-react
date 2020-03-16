import React from "react";
import {connect} from "react-redux";
import * as moduleService from "../../../services/ModuleService";
import * as moduleActions from "../../../actions/moduleActions";
import {Link} from "react-router-dom";


class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }

    render() {
        return (
            <div class={'container'}>
                <div class={'col-5'}>
                    <div class={'row'}>
                        {this.props.modules && this.props.modules.map((module, index) =>
                            <div key={module._id}>
                                <button onClick={
                                    () => this.props.deleteModule(module._id)}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                                {index !== this.props.ifModuleEditingIndex &&
                                <>
                                    <button onClick={
                                        () => this.props.editModule(index, module.title)}>
                                        <i className="fas fa-pencil-alt"></i>
                                    </button>
                                    <Link to={`/course-editor/${this.props.match.params.courseId}/module/${module._id}`}>
                                        {module.title}
                                    </Link>
                                </>}

                                {index == this.props.ifModuleEditingIndex &&
                                <>
                                    <button onClick={
                                        () =>
                                            this.props.saveModule(
                                                module._id,
                                                {"title":this.props.moduleEditingContent}
                                            )
                                    }>
                                        save
                                    </button>
                                    <input value={this.props.moduleEditingContent}
                                           onChange={event => this.props.changeModule(event.target.value)}/>
                                </>
                                }
                            </div>
                        )}
                    </div>
                </div>

                <div class={'col-6'}>
                    <div class={'row justify-content-md-center'}>
                        <button onClick={
                            () => this.props.createModule(this.props.courseId)}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const stateToPropertyMapper = (state) => {
    return {
        ifModuleEditingIndex: state.modules.ifModuleEditingIndex,
        modules: state.modules.modules,
        moduleEditingContent: state.modules.moduleEditingContent
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
                module => dispatch(moduleActions.createModule(module))
            )
        },
        editModule: (index, content) => {
            dispatch(moduleActions.changeModuleEditingStatus(index, content))
        },
        saveModule: (moduleId, module) => {
            moduleService.updateModule(moduleId, module).then(
                r => {
                    dispatch(moduleActions.updateModule(moduleId, module));
                    dispatch(moduleActions.saveModule())
                }
            )
        },
        changeModule: (content) => {
            dispatch(moduleActions.changeModuleEditingContent(content))
        }

    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)
