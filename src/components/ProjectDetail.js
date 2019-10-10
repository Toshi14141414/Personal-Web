import React, { Component } from "react";

export class ProjectDetail extends Component {
  render() {
    return (
      <div>
        <p style={style.name}>{this.props.value.name}</p>
        <ul>
          {this.props.value.details.map(detail => (
            <p
              style={style.text}
              className="resume-text-detail"
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const style = {
  name: {
    color: "#83c192",
    fontSize: "1.25rem",
    fontWeight: "bold"
  },
  text: {
    marginTop: "0rem",
    marginBottom: "0rem",
    paddingBottom: "0.5rem",
    fontWeight: "bold"
  }
};

export default ProjectDetail;
