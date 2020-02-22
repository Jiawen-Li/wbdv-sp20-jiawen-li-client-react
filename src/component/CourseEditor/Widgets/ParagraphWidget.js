import React from "react";
import {updateWidget} from "../../../actions/widgetActions";
import {connect} from "react-redux";

class ParagraphWidget extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.editing &&
                    <textarea
                        value={this.props.widget.value}
                        onChange={(e) => {
                            this.props.updateWidget(this.props.widget.id, {
                                ...this.props.widget,
                                value: e.target.value
                            })
                        }
                        }></textarea>
                }
                {
                    !this.props.editing &&
                    <span>
                        {this.props.widget.value}
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
(ParagraphWidget)