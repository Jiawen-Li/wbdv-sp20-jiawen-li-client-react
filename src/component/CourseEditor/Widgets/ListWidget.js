import React from "react";
import {updateWidget} from "../../../actions/widgetActions";
import {connect} from "react-redux";

class ListWidget extends React.Component {
    render() {
        return (
            <li className={'list-group-item'}>
                <span><h4>List Widget</h4></span>
                <div className={'row'}>
                    <button><i className="fas fa-arrow-up"></i></button>
                    <button><i className="fas fa-arrow-down"></i></button>
                    <select value={'List'}>
                        <option value={'HEADING'}>Heading</option>
                        <option value={'PARAGRAPH'}>Paragraph</option>
                        <option value={'LIST'}>List</option>
                        <option value={'IMAGE'}>Image</option>
                    </select>
                    <button><i className="fas fa-times"></i></button>
                </div>
                <textarea className={'row'}
                          style={{'margin-bottom': '10px', 'margin-top': '10px'}}
                          value={'Put each item in a separate row'}>
                    </textarea>
                <div className={'row'} style={{'margin-bottom': '10px'}}>
                    <select value={'Unordered list'} style={{'width': '600px'}}>
                        <option>Unordered list</option>
                        <option>Ordered list</option>
                    </select>
                </div>
                <div className={'row'} style={{'margin-bottom': '10px'}}>
                    <input value={'Widget name'} style={{'width': '600px'}}/>
                </div>
                <div className={'row'} style={{'margin-bottom': '10px'}}>
                    <h4>Preview</h4>
                </div>
                <div className={'row'} style={{'margin-bottom': '10px'}}>
                    <h3>Put each item in a separate row.</h3>
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
(ListWidget)