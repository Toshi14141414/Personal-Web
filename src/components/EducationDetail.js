import React, { Component } from "react";

class EducationDetail extends Component {
  render() {
    return (
      <div>
        <p dangerouslySetInnerHTML={{ __html: this.props.value.school }} />
        <p>{this.props.value.degree}</p>
        <p>{this.props.value.courses}</p>
      </div>
    );
  }
}

export default EducationDetail;
