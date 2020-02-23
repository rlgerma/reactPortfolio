import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'
import Portfolio from '../components/Portfolio'
import Technologies from '../components/Technologies'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import HeroText from '../components/HeroText'
import Social from '../components/Social'

import media from '../utils/style'

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;
  ${props =>
    props.dark &&
    css`
      background: #292929;
      h2 {
        color: #fff;
      }
      h3 {
        color: #fff;
      }
      div {
        color: #979797;
      }
    `}
`

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  ${media.xs`
    font-size:1.5em;
  `}
`

const IndexPage = ({ data }) => (
  <Layout>
    <Hero fluid={data.hero.edges[0].node.fluid}>
      <HeroText />
      <Social edges={data.allSocialJson.edges} />
    </Hero>
    <Section id="about-me">
      <h1>About Me</h1>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <p>
            My name is Richard Germaine. I'm a Web Developer from Denver, CO.
          </p>
        </Box>
      </Flex>
    </Section>
    <Section id="portfolio" dark>
      <SectionTitle>My Work</SectionTitle>
      <Portfolio />
    </Section>
    <Section id="technologies">
      <SectionTitle>Stuff I Use</SectionTitle>
      <Technologies edges={data.allLogos.edges} />
    </Section>
    <Section id="contact" dark>
      <SectionTitle>Contact Me</SectionTitle>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <ContactForm />
        </Box>
      </Flex>
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query indexQuery {
    allSocialJson {
      edges {
        node {
          url
          type
        }
      }
    }

    allLogos: allImageSharp(
      filter: { original: { src: { regex: "/logo/" } } }
      sort: { fields: original___src }
    ) {
      edges {
        node {
          id
          fixed(height: 80, grayscale: false) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
    hero: allImageSharp(
      filter: { original: { src: { regex: "/background/" } } }
    ) {
      edges {
        node {
          id
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
