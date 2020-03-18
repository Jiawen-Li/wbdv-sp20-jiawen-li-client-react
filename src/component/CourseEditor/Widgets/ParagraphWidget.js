import React from "react";
import {updateWidget} from "../../../actions/widgetActions";
import {connect} from "react-redux";

class ParagraphWidget extends React.Component {
    render() {
        return (
            <li className={'list-group-item'}>
                <span><h4>Paragraph Widget</h4></span>
                <div className={'row'}>
                    <button><i className="fas fa-arrow-up"></i></button>
                    <button><i className="fas fa-arrow-down"></i></button>
                    <select value={'Paragraph'}>
                        <option value={'HEADING'}>Heading</option>
                        <option value={'PARAGRAPH'}>Paragraph</option>
                        <option value={'LIST'}>List</option>
                        <option value={'IMAGE'}>Image</option>
                    </select>
                    <button><i className="fas fa-times"></i></button>
                </div>
                <textarea className={'row'}
                          style={{'margin-bottom': '10px', 'margin-top': '10px'}}
                          value={'Lorem ipsum'}>
                    </textarea>
                <div className={'row'} style={{'margin-bottom': '10px'}}>
                    <input value={'Widget name'} style={{'width': '600px'}}/>
                </div>
                <div className={'row'} style={{'margin-bottom': '10px'}}>
                    <h4>Preview</h4>
                </div>
                <div className={'row'} style={{'margin-bottom': '10px'}}>
                    <h3>Lorem ipsum</h3>
                </div>
            </li>

            // <div>
            //     {
            //         this.props.editing &&
            //         <textarea
            //             value={this.props.widget.value}
            //             onChange={(e) => {
            //                 this.props.updateWidget(this.props.widget.id, {
            //                     ...this.props.widget,
            //                     value: e.target.value
            //                 })
            //             }
            //             }>
            //         </textarea>
            //     }
            //     {
            //         !this.props.editing &&
            //         <span>
            //             {this.props.widget.value}
            //         </span>
            //     }
            // </div>
        )
    }
}


const dispatchToPropertyMapper = (dispatch) => ({
    updateWidget: (wid, newWidget) => dispatch(updateWidget(wid, newWidget))
})


export default connect(
    null,
    dispatchToPropertyMapper)
(ParagraphWidget)