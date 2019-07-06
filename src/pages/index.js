import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layout/layout'

import Container from '../layout/Container'
import SuperText from '../components/SuperText'
import SEO from '../components/SEO'
// import PostListing from '../components/PostListing'

const RecentPostsContainer = styled.div`
  padding-top: 20vh;
  text-align: left;

  .title {
    font-size: 2em;
    color: var(--text);
  }
`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => (
  <Layout>
    <Container>
      <SEO title="Hanyu Xu" />
      <SuperText id="niceToMeetYou">Hello</SuperText>
      <div>
        <h1>My name is <span id="hanyuXu">Hanyu Xu</span>.</h1>
        <p>A Master Student At {' '}
          <a href="https://www.nyu.edu/" id="university">New York University.</a>
        </p>
        <p>
          I'm a creative, ambitious and enterprising software engineer primarily focusing on web development.
          I love work with React, Node, Java and Python. 
          Also, I like Video Games, Manga, TV serious - Friends and The Cranberries. 
        </p>

        <p id="job">Actively looking for Software Engineer Full-Time job.</p>

        <RecentPostsContainer>
          <h1 className="title">Don't know what to put right now</h1>
          <div id="recent-posts">
            
          </div>
        </RecentPostsContainer>
      </div>
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      limit: 3
      filter:{fileAbsolutePath: {regex: ""}}, 
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
`
