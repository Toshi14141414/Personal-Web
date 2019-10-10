import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../layout/layout";

import Container from "../layout/Container";
import SuperText from "../components/SuperText";
import SEO from "../components/SEO";
import ToolBoxListContainer from "../layout/ToolBoxListContainer";

const ToolBoxContainer = styled.div`
  padding-top: 20vh;
  text-align: left;

  .title {
    font-size: 2em;
    color: var(--text);
  }
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => (
  <Layout>
    <Container>
      <SEO title="Hanyu Xu" />
      <SuperText id="hello">Hello</SuperText>
      <div>
        <h1>
          My name is <span id="hanyuXu">Hanyu Xu</span>.
        </h1>
        <p>
          I’m currently pursing my Master’s degree in Computer Engineering at{" "}
          <a href="https://www.nyu.edu/" id="university">
            New York University
          </a>
          .
        </p>
        <p>
          As a creative, ambitious, and promising software engineer who
          primarily works on Web Development, I am pretty decent at using{" "}
          <span style={{ color: "#fada5d", fontWeight: "bold" }}>React</span>,{" "}
          <span style={{ color: "#fada5d", fontWeight: "bold" }}>Node</span>,{" "}
          <span style={{ color: "#fada5d", fontWeight: "bold" }}>Java</span> and{" "}
          <span style={{ color: "#fada5d", fontWeight: "bold" }}>Python</span>.
          I’m kinda like a{" "}
          <span style={{ color: "#fada5d", fontWeight: "bold" }}>
            “work hard play hard”
          </span>{" "}
          type of person. I enjoy video games and jam rock music. If you happen
          to like watching{" "}
          <span style={{ color: "#fada5d", fontWeight: "bold" }}>Friends</span>{" "}
          or listening to{" "}
          <span style={{ color: "#fada5d", fontWeight: "bold" }}>
            The Cranberries
          </span>{" "}
          , we could probably get along quite well and talk all day long.
        </p>

        <p id="job">
          Actively looking for software engineer full-time jobs. But open to
          other similar positions as well.
        </p>

        <ToolBoxContainer>
          <SuperText id="toolbox">Toolbox</SuperText>
          <ToolBoxListContainer id="toolboxContainer" />
        </ToolBoxContainer>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      limit: 3
      filter: { fileAbsolutePath: { regex: "" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            description
            date
          }
        }
      }
    }
  }
`;
