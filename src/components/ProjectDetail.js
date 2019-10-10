import React, { Component } from "react";

export class ProjectDetail extends Component {
  render() {
    return (
      <div>
        <p>{this.props.value.name}</p>
        <ul>
          {this.props.value.details.map(detail => (
            <p dangerouslySetInnerHTML={{ __html: detail }} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProjectDetail;
