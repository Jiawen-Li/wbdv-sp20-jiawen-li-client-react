import React from "react";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import {updateWidget} from "../../../services/WidgetService";

export default class Widget extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.widget.type === "HEADING" &&
                    <HeadingWidget
                        editing={this.props.editing}
                        widget={this.props.widget}/>
                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidget
                        editing={this.props.editing}
                        widget={this.props.widget}/>
                }
                {   this.props.editing &&
                <span>
                        <button onClick={() =>
                            this.props.deleteWidget(this.props.widget.id)}>
                            X
                        </button>
                        <button onClick={() =>{
                            updateWidget(this.props.widget.id,this.props.widget);
                            this.props.save()
                        }}>
                            Save
                        </button>
                    </span>
                }
            </div>
        )
    }
}