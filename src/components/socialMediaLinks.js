import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { Github } from 'styled-icons/feather/Github'
import { Linkedin } from 'styled-icons/feather/Linkedin'
import { Weibo } from 'styled-icons/fa-brands/Weibo'
import { Instagram } from 'styled-icons/feather/Instagram'
import { Mail } from 'styled-icons/feather/Mail'

const ICON_SIZE = '32'

const Link = styled.a`
  padding: 1em;
`
const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  align-content: center;
  flex-wrap: wrap;
  max-width: 400px;

  a {
    svg {
      &:hover {
        color: var(--text);
      }
    }
  }
`

const SocialMediaLinks = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            instagram
            github
            linkedin
            weibo
            email
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { instagram, github, linkedin, weibo, email }
      }
    }) => {
      return (
        <SocialMediaContainer>
          <Link href={instagram} alt='Instagram' aria-label='Link to Instagram'>
            <Instagram color = "#f29c9f" size={ICON_SIZE} />
          </Link>
          <Link href={github} alt='Github' aria-label='Link to Github'>
            <Github color = "#83c192" size={ICON_SIZE} />
          </Link>
          <Link href={linkedin} alt='LinkedIn' aria-label='Link to Linked In'>
            <Linkedin color = "#fada5d" size={ICON_SIZE} />
          </Link>
          <Link href={weibo} alt='Weibo' aria-label='Link to Weibo'>
            <Weibo color = "#51c7da" size={ICON_SIZE} />
          </Link>
          <Link
            href={`mailto:${email}`}
            alt='E-mail'
            aria-label='Link to Send Email'
          >
            <Mail color = "#af98e6" size={ICON_SIZE} />
          </Link>
        </SocialMediaContainer>
      )
    }}
  />
)

export default SocialMediaLinks
