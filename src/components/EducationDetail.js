import React, { Component } from "react";

class EducationDetail extends Component {
  render() {
    return (
      <div>
        <p
          className="resume-detail-subtitle"
          dangerouslySetInnerHTML={{ __html: this.props.value.school }}
        />
        <ul>
          <p
            style={style.text}
            className="resume-text-detail"
            dangerouslySetInnerHTML={{ __html: this.props.value.degree }}
          />
          <p
            style={style.text}
            className="resume-text-detail"
            dangerouslySetInnerHTML={{ __html: this.props.value.courses }}
          />
        </ul>
      </div>
    );
  }
}

const style = {
  text: {
    marginTop: "0rem",
    marginBottom: "0rem",
    paddingBottom: "0.5rem",
    fontWeight: "bold"
  }
};

export default EducationDetail;
