import React from "react";
import {connect} from "react-redux";
import {updateWidget} from "../../../actions/widgetActions";

class HeadingWidget extends React.Component {


    editingView = () =>
        <>
            <span><h4>Heading Widget</h4></span>
            <div className={'row'}>
                <button><i className="fas fa-arrow-up"></i></button>
                <button><i className="fas fa-arrow-down"></i></button>
                <select value={'Heading'}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                </select>
                <button><i className="fas fa-times"></i></button>
            </div>
            <div className={'row'} style={{'margin-bottom': '10px', 'margin-top': '10px'}}>
                <input value={'Heading text'} style={{'width': '600px'}}/>
            </div>
            <div className={'row'} style={{'margin-bottom': '10px'}}>
                <select value={'Heading 1'} style={{'width': '600px'}}>
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                </select>
            </div>
            <div className={'row'} style={{'margin-bottom': '10px'}}>
                <input value={'Widget name'} style={{'width': '600px'}}/>
            </div>
            {/*<div className={'row'} style={{'margin-bottom': '10px'}}>*/}
            {/*    <h4>Preview</h4>*/}
            {/*</div>*/}
            {/*<div className={'row'} style={{'margin-bottom': '10px'}}>*/}
            {/*    <h3>Heading text</h3>*/}
            {/*</div>*/}
        </>

    preview = () =>
        <div>
            <h1>Preview</h1>

            {/*{this.props.widget.value}*/}
        </div>

    render() {
        return (
            <li className={'list-group-item'}>
                {this.editingView()}
                {!this.props.editing && this.preview()}
            </li>


            // <div>
            //     {
            //         this.props.editing &&
            //         <div>
            //             <input
            //                 onChange={(e) => {
            //                     this.props.updateWidget(this.props.widget.id, {
            //                         ...this.props.widget,
            //                         value: e.target.value
            //                     })
            //                 }
            //                 }
            //                 value={this.props.widget.value}/>
            //             <select
            //                 onChange={(e) => {
            //                     let newSize = e.target.value
            //                     newSize = parseInt(newSize)
            //                     this.setState(prevState => ({
            //                         widget: {
            //                             ...prevState.widget,
            //                             size: newSize
            //                         }
            //                     }))
            //                 }}
            //                 value={this.props.widget.size}>
            //                 <option value={1}>Heading 1</option>
            //                 <option value={2}>Heading 2</option>
            //                 <option value={3}>Heading 3</option>
            //                 <option value={4}>Heading 4</option>
            //                 <option value={5}>Heading 5</option>
            //             </select>
            //             <select
            //                 onChange={(e) => {
            //                     let newType = e.target.value
            //                     this.props.updateWidget(this.props.widget.id,{
            //                         ...this.props.widget,
            //                         type: newType
            //                     })
            //                 }}
            //                 value={this.props.widget.type}>
            //                 <option value={"HEADING"}>Heading</option>
            //                 <option value={"PARAGRAPH"}>Paragraph</option>
            //
            //             </select>
            //         </div>
            //     }
            //     {
            //         !this.props.editing &&
            //         <span>
            //             {this.props.widget.size === 1 && <h1>{this.props.widget.value}</h1>}
            //             {this.props.widget.size === 2 && <h2>{this.props.widget.value}</h2>}
            //             {this.props.widget.size === 3 && <h3>{this.props.widget.value}</h3>}
            //             {this.props.widget.size === 4 && <h4>{this.props.widget.value}</h4>}
            //             {this.props.widget.size === 5 && <h5>{this.props.widget.value}</h5>}
            //             {this.props.widget.size === 6 && <h6>{this.props.widget.value}</h6>}
            //         </span>
            //     }
            // </div>
        )
            ;
    }
}

const dispatchToPropertyMapper = (dispatch) => ({
    updateWidget: (wid, newWidget) => dispatch(updateWidget(wid, newWidget))
})


export default connect(
    null,
    dispatchToPropertyMapper)
(HeadingWidget)