/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../components/logo"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main
         style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
        >{children}</main>
        <footer style={{
          marginTop: `2rem`,
          padding: `2rem 0`,
        }}>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Logo />
          </div>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.maitak.com">unicorns</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
