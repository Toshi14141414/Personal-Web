// import React from 'react'
// import Layout from '../layout/layout'
// import styled from 'styled-components'
// import PortfolioListing from '../components/PortfolioListing'
// import SuperText from '../components/SuperText'

// import { graphql } from 'gatsby'

// import Container from '../layout/Container'
// import SEO from '../components/SEO'

// const GridWrapper = styled.div`
//   display: grid;
//   grid-gap: 10px;
//   grid-template-columns: repeat(auto-fit, 250px);
//   grid-auto-rows: 250px;
//   justify-content: center;
//   align-items: center;
// `

// const Panel = styled.div`
//   margin-left: 5px;
//   margin-right: 5px;
//   height: 250px;
//   width: 250px;
// `

// const PortfolioPage = ({
//   data: {
//     allMarkdownRemark: { edges: projects }
//   }
// }) => {
//   return (
//     <Layout>
//       <Container>
//         <SuperText>Experience</SuperText>
//         <GridWrapper>
//           {projects.map(({ node: { id, frontmatter } }) => (
//             <Panel key={id}>
//               <PortfolioListing {...frontmatter} />
//             </Panel>
//           ))}
//         </GridWrapper>
//       </Container>
//     </Layout>
//   )
// }

// export default PortfolioPage

// export const pageQuery = graphql`
//   {
//     allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             slug
//             title
//             description
//             preview {
//               childImageSharp {
//                 fixed(width: 250, height: 250) {
//                   ...GatsbyImageSharpFixed_withWebp_noBase64
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../layout/layout";

import SEO from "../components/SEO";
import SuperText from "../components/SuperText";

const Center = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ThingsPage = () => {
  return (
    <Layout>
      <SEO title="FOUR OH FOUR!" />
      <Center>
        <SuperText size="3em">FourOhFour</SuperText>
        <p>Still working on this page. Coming Soon.</p>
        <Link to="/">Go Home</Link>
      </Center>
    </Layout>
  );
};

export default ThingsPage;
