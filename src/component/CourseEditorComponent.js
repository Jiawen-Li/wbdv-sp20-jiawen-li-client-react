import React from "react";

const CourseEditorComponent = ({courses}) =>
    <>
        <div className="container">
            <div className="row">
                <div className="form-group col-3 wbdv-module-list">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                        <a className="nav-link d-flex justify-content-between align-content-center wbdv-module-item"
                           id="v-pills-home-tab"
                           data-toggle="pill" href="#v-pills-home"
                           role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <span className="wbdv-module-item-title">Module 1 - jQuery</span>
                            <i className="fas fa-times wbdv-module-item-delete-btn"></i>
                        </a>
                        <a className="nav-link active d-flex justify-content-between align-content-center wbdv-module-item"
                           id="v-pills-profile-tab"
                           data-toggle="pill" href="#v-pills-profile"
                           role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <span className="wbdv-module-item-title">Module 2 - React</span>
                            <i className="fas fa-times wbdv-module-item-delete-btn"></i>
                        </a>
                        <a className="nav-link d-flex justify-content-between align-content-center wbdv-module-item"
                           id="v-pills-messages-tab"
                           data-toggle="pill" href="#v-pills-messages"
                           role="tab" aria-controls="v-pills-messages" aria-selected="false">
                            <span className="wbdv-module-item-title">Module 3 - Redux</span>
                            <i className="fas fa-times wbdv-module-item-delete-btn"></i>
                        </a>
                        <a className="nav-link d-flex justify-content-between align-content-center wbdv-module-item"
                           id="v-pills-settings-tab"
                           data-toggle="pill" href="#v-pills-settings"
                           role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <span className="wbdv-module-item-title">Module 4 - Native</span>
                            <i className="fas fa-times wbdv-module-item-delete-btn"></i>
                        </a>
                        <a className="nav-link d-flex justify-content-between align-content-center wbdv-module-item"
                           id="v-pills-settings-tab"
                           data-toggle="pill" href="#v-pills-settings"
                           role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <span className="wbdv-module-item-title">Module 5 - Angular</span>
                            <i className="fas fa-times wbdv-module-item-delete-btn"></i>
                        </a>
                        <a className="nav-link d-flex justify-content-between align-content-center wbdv-module-item"
                           id="v-pills-settings-tab"
                           data-toggle="pill" href="#v-pills-settings"
                           role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <span className="wbdv-module-item-title">Module 6 - Node</span>
                            <i className="fas fa-times wbdv-module-item-delete-btn"></i>
                        </a>
                        <a className="nav-link d-flex justify-content-between align-content-center wbdv-module-item"
                           id="v-pills-settings-tab"
                           data-toggle="pill" href="#v-pills-settings"
                           role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <span className="wbdv-module-item-title">Module 7 - Mongo</span>
                            <i className="fas fa-times wbdv-module-item-delete-btn"></i>
                        </a>
                        <a className="nav-link d-flex justify-content-between align-content-center wbdv-module-item"
                           id="v-pills-settings-tab"
                           data-toggle="pill" href="#v-pills-settings"
                           role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <span className="wbdv-module-item-title"></span>
                            <i className="fas fa-plus wbdv-module-item-delete-btn"></i>
                        </a>
                    </div>
                </div>
                <div className="form-group col-9 wbdv-topic-pill-list">
                    <button type="button" className="btn wbdv-topic-pill"
                            style="background-color: dimgrey;color: white">
                        Topic 1
                    </button>
                    <button type="button" className="btn active wbdv-topic-pill"
                            style="background-color: black;color: white">
                        Topic 2
                    </button>
                    <button type="button" className="btn wbdv-topic-pill"
                            style="background-color: dimgrey;color: white">
                        Topic 3
                    </button>
                    <button type="button" className="btn wbdv-topic-pill"
                            style="background-color: dimgrey;color: white">
                        Topic 4
                    </button>
                    <button type="button" className="btn wbdv-topic-add-btn"
                            style="background-color: dimgrey;color: white">
                        <i className="fas fa-plus"></i>
                    </button>

                    <div className="form-group row offset-7">
                        <button type="button" className="btn btn-success my-2">Save</button>
                        <button type="button" className="btn btn-secondary my-2 mx-2">Preview</button>
                    </div>

                    <div className="form-group row">
                        <span className="head fa-2x col-7" style="font-weight: bold"> Heading Widge</span>
                        <i className="fas fa-arrow-up fa-2x d-flex justify-content-between align-items-center mx-1 col-1"
                           style="color: black"></i>
                        <i className="fas fa-arrow-down fa-2x d-flex justify-content-between align-items-center mx-1 col-1"
                           style="color: black"></i>
                        <select className="form-control wbdv-field col-2 mx-1">
                            <option>Heading</option>
                        </select>
                        <i className="fas fa-times fa-2x d-flex justify-content-between align-items-center mx-2 my-1"></i>
                    </div>

                    <input type="heading-text" className="form-control wbdv-field my-2 mb-3"
                           id="headingtext" placeholder="Heading text">

                        <select className="custom-select custom-select my-2 mb-3  ">
                            <option selected>Heading 1</option>
                        </select>

                        <input type="widget-name" className="form-control wbdv-field my-2 mb-3"
                               id="widgetname" placeholder="Heading text"/></input>

                        <span className="head fa-1x col-7"> Preview </span>
                        <span className="head fa-2x col-7" style="font-weight: bold"> Heading Text </span>

                        <div className="form-group row float-right my-4">
                            <i className="fas fa-trash-alt" style="color: darkred"/>
                        </div>

                </div>
            </div>
        </div>
    </>

export default CourseEditorComponent;