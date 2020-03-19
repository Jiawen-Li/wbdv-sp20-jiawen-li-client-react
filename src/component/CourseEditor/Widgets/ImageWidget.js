import React from "react";
import {updateWidget} from "../../../actions/widgetActions";
import {connect} from "react-redux";

class ImageWidget extends React.Component {

    editingView = () =>
        <>
            <span><h4>List Widget</h4></span>

            <div className={'row'}>

                <button><i className="fas fa-arrow-up"></i></button>
                <button><i className="fas fa-arrow-down"></i></button>

                <select value={this.props.widget.type}
                        placeholder={'IMAGE'}
                        onChange={event => this.props.update(this.props.widget.id, {
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

            <div className={'row'} style={{'margin-bottom': '10px', 'margin-top': '10px'}}>
                <input value={this.props.widget.url} style={{'width': '600px'}}
                       onChange={event => this.props.updateWidget(this.props.widget.id, {
                           ...this.props.widget,
                           url: event.target.value
                       })}/>
            </div>

            <div className={'row'} style={{'margin-bottom': '10px'}}>
                <input value={this.props.widget.name} style={{'width': '600px'}}
                       placeholder={'Widget name'}
                       onChange={event =>
                           this.props.updateWidget(this.props.widget.id, {
                               ...this.props.widget,
                               name: event.target.name
                           })}/>
            </div>
        </>

    preview = () =>
        <div>
            <h1>Preview</h1>
            <img src={this.props.widget.url} alt={"pic"}/>
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
    updateWidget: (wid, newWidget) => dispatch(updateWidget(wid, newWidget))
})


export default connect(
    null,
    dispatchToPropertyMapper)
(ImageWidget)