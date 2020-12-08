/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Slideover from "../components/util/Slideover"

const IndexLayout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="flex flex-col min-h-screen">
      <Hero title="The HideOut Studio" />
      <Slideover />
        <main className="flex-grow container mx-auto">
          {children}
        </main>
      <Footer />
    </div>
  )
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout
