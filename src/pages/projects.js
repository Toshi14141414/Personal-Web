// import React from 'react'
// import Layout from '../layout/layout'
// import { graphql } from 'gatsby'
// import PostListing from '../components/PostListing'
// import SuperText from '../components/SuperText'

// import Container from '../layout/Container'
// import SEO from '../components/SEO'

// const projectsPage = ({
//   data: {
//     allMarkdownRemark: { edges }
//   }
// }) => {
//   return (
//     <Layout>
//       <SEO
//         title='Blog - Matthew Secrist'
//         description='Words and code.'
//         pathname='/blog'
//       />
//       <Container>
//         <SuperText>Projects</SuperText>
//         {edges.map(post => {
//           return <PostListing key={post.node.id} {...post.node.frontmatter} />
//         })}
//       </Container>
//     </Layout>
//   )
// }

// export default projectsPage

// export const pageQuery = graphql`
//   {
//     allMarkdownRemark(
//       filter:{fileAbsolutePath: {regex: ""}}, 
//       sort: { fields: frontmatter___date, order: DESC }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             slug
//             title
//             description
//             date
//           }
//         }
//       }
//     }
//   }
// `




import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../layout/layout'

import SEO from '../components/SEO'
import SuperText from '../components/SuperText'

const Center = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ProjectPage = () => {
  return (
    <Layout>
      <SEO title='FOUR OH FOUR!' />
      <Center>
        <SuperText size='3em'>FourOhFour</SuperText>
        <p>This doesn't seem to be a page.</p>
        <Link to='/'>Go Home</Link>
      </Center>
    </Layout>
  )
}

export default ProjectPage