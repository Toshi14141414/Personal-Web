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

const ResumePage = () => {
  return (
    <Layout>
      <SEO title='FOUR OH FOUR!' />
      <Center>
        <SuperText size='3em'>FourOhFour</SuperText>
        <p>Still working on this page. Coming Soon.</p>
        <Link to='/'>Go Home</Link>
      </Center>
    </Layout>
  )
}

export default ResumePage

