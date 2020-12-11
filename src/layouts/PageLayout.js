/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Footer from "../components/Footer"
import Slideover from "../components/util/Slideover"
import Paragraph from "../components/atoms/Paragraph"
import ButtonLink from "../components/atoms/ButtonLink"

const PageLayout = ({ children }) => {
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
    <div className="flex flex-col min-h-screen bg-black">
      <Slideover />
        <main className="flex-grow container mx-auto">
          {children}
          <Paragraph className="text-center flex flex-col">
            Want to contact us?
            <ButtonLink className="my-4 mx-auto block" to="/about/contact">Contact page</ButtonLink>
          </Paragraph>  
        </main>
      <Footer />
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
