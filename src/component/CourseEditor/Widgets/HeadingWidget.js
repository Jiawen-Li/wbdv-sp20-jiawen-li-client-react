import React from "react";
import {connect} from "react-redux";
import {updateWidget} from "../../../actions/widgetActions";

class HeadingWidget extends React.Component {

    state = {
        widget: this.props.widget
    }

    render() {
        return (
            <div>
                {
                    this.props.editing &&
                    <div>
                        <input
                            onChange={(e) => {
                                this.props.updateWidget(this.props.widget.id, {
                                    ...this.props.widget,
                                    value: e.target.value
                                })
                            }
                            }
                            value={this.props.widget.value}/>
                        <select
                            onChange={(e) => {
                                let newSize = e.target.value
                                newSize = parseInt(newSize)
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        size: newSize
                                    }
                                }))
                            }}
                            value={this.props.widget.size}>
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                        </select>
                        <select
                            onChange={(e) => {
                                let newType = e.target.value
                                this.props.updateWidget(this.props.widget.id,{
                                    ...this.props.widget,
                                    type: newType
                                })
                            }}
                            value={this.props.widget.type}>
                            <option value={"HEADING"}>Heading</option>
                            <option value={"PARAGRAPH"}>Paragraph</option>

                        </select>
                    </div>
                }
                {
                    !this.props.editing &&
                    <span>
                        {this.props.widget.size === 1 && <h1>{this.props.widget.value}</h1>}
                        {this.props.widget.size === 2 && <h2>{this.props.widget.value}</h2>}
                        {this.props.widget.size === 3 && <h3>{this.props.widget.value}</h3>}
                        {this.props.widget.size === 4 && <h4>{this.props.widget.value}</h4>}
                        {this.props.widget.size === 5 && <h5>{this.props.widget.value}</h5>}
                        {this.props.widget.size === 6 && <h6>{this.props.widget.value}</h6>}
                    </span>
                }
            </div>
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => ({
    updateWidget: (wid, newWidget) => dispatch(updateWidget(wid, newWidget))
})


export default connect(
    null,
    dispatchToPropertyMapper)
(HeadingWidget)