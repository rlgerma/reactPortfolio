import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styledNormalize from "styled-normalize";
import Link from "./Link";

import "typeface-raleway";
import "typeface-open-sans";

import Navbar from "./Navbar";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${styledNormalize}

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  body, input, select, textarea {
    font-size: 14pt;
    line-height: 1.5;
    font-family: 'Open Sans';
  }

  p {
    margin-bottom: 64px;
    color: #666;
  }



h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: #292929;
  }

`;

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align: center;
  color: #fff;
  background-color: #000;
  img {
    margin-bottom: 0;
  }
`;

const FooterText = styled.div`
  font-size: 0.7em;
  padding: 3em;
`;

interface LayoutProps {
  noMenu: boolean;
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}

const Layout = (props: LayoutProps): JSX.Element => (
  <StaticQuery
    query={graphql`
      query layoutQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        allMenuJson {
          edges {
            node {
              title
              link
              id
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Body>
          <GlobalStyle />
          <Helmet title={data.site.siteMetadata.title}>
            <html lang='en' />
            <meta name='description' content='Full Stack Developer from Denver, CO' />
            <meta name='author' content='Richard Germaine' />
            <meta
              name='keywords'
              content='React,Full Stack,Developer,Richard Germaine, JavaScript'
            />
          </Helmet>
          <Navbar menu={data.allMenuJson.edges} noMenu={props.noMenu} />
          {props.children}
          <Footer>
            <FooterText>
              Thanks for checking out my site
              <br />
              <br /> You can also find me on
              <br />
              <Link to='https://www.linkedin.com/in/richard-germaine-04261318b/'>
                LinkedIn
              </Link>{" "}
              {"-"} <Link to='https://github.com/rlgerma'>GitHub</Link> -
              <Link to='https://twitter.com/rickygermaine'> Twitter</Link>
              <br />
              <br />
              rgermaine.com
            </FooterText>
          </Footer>
        </Body>
      </>
    )}
  />
);

export default Layout;
