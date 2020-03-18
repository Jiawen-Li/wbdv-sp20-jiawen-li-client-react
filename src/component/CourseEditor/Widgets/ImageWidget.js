import React from "react";
import {updateWidget} from "../../../actions/widgetActions";
import {connect} from "react-redux";

class ImageWidget extends React.Component {
    render() {
        return (
            <li className={'list-group-item'}>
                <span><h4>List Widget</h4></span>
                <div className={'row'}>
                    <button><i className="fas fa-arrow-up"></i></button>
                    <button><i className="fas fa-arrow-down"></i></button>
                    <select value={'Image'}>
                        <option>Heading</option>
                        <option>Paragraph</option>
                        <option>List</option>
                        <option>Image</option>
                    </select>
                    <button><i className="fas fa-times"></i></button>
                </div>
                <div className={'row'} style={{'margin-bottom': '10px', 'margin-top': '10px'}}>
                    <input value={'http://'} style={{'width': '600px'}}/>
                </div>
                <div className={'row'} style={{'margin-bottom': '10px'}}>
                    <input value={'Widget name'} style={{'width': '600px'}}/>
                </div>
                <div className={'row'} style={{'margin-bottom': '10px'}}>
                    <h4>Preview</h4>
                </div>
                <div className={'row'} style={{'margin-bottom': '10px'}}>
                    <h3>should be picture.</h3>
                </div>
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