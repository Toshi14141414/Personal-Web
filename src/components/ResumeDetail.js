import React, { Component } from "react";

export class ResumeDetail extends Component {
  render() {
    return (
      <div>
        <p
          className="resume-detail-subtitle"
          dangerouslySetInnerHTML={{ __html: this.props.value.title }}
        />

        <p style={style.positionTime}>{this.props.value.position}</p>

        <p style={style.positionTime}>{this.props.value.time}</p>

        <ul>
          {this.props.value.details.map(detail => (
            <p
              className="resume-text-detail"
              style={style.text}
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const style = {
  positionTime: {
    color: "#51c7da",
    marginTop: "0rem",
    marginBottom: "0rem",
    paddingBottom: "0.5rem",
    fontWeight: "bold"
  },
  text: {
    marginTop: "0rem",
    marginBottom: "0rem",
    paddingBottom: "0.5rem",
    fontWeight: "bold"
  }
};

export default ResumeDetail;
