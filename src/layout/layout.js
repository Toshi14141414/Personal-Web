import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../theme/GlobalStyle'
import Navigation from './Navigation'
import { md } from 'styled-bootstrap-responsive-breakpoints'

import SocialMediaLinks from '../components/socialMediaLinks'

const ContentContainer = styled.div`
  padding: 2vw;
  margin-right: 250px;

  @media screen and (max-width: ${md}px) {
    margin-right: 0;
  }
`

const ThemeToggle = styled.span`
  cursor: pointer;
  position: absolute;
  top: 10;
  left: 10;
  z-index: 99;
`
const Foot = styled.div`
  padding-top: 20vh;
  font-size: 0.75em;
  text-align: center;
`

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeToggle></ThemeToggle>
      <Navigation />
      <ContentContainer>
        {children}
        <Foot>
          <SocialMediaLinks />
          <p>&copy; Copyright 2019, Hanyu Xu</p>
        </Foot>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Layout
