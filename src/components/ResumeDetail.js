import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

export class ResumeDetail extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6} sm={12}>
            Title
          </Col>
          <Col md={6} sm={12}>
            Time
          </Col>
        </Row>

        <ul>
          <li>detail</li>
        </ul>
      </Container>
    );
  }
}

export default ResumeDetail;
