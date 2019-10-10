import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

export class ResumeDetail extends Component {
  render() {
    return (
      <Container>
        <Row>
          <p dangerouslySetInnerHTML={{ __html: this.props.value.title }} />
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <p>{this.props.value.position}</p>
          </Col>
          <Col sm={12} md={6}>
            <p>{this.props.value.time}</p>
          </Col>
        </Row>
        <ul>
          {this.props.value.details.map(detail => (
            <p dangerouslySetInnerHTML={{ __html: detail }} />
          ))}
        </ul>
      </Container>
    );
  }
}

export default ResumeDetail;
