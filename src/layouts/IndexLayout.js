/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useInView } from "react-intersection-observer";

import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Slideover from "../components/util/Slideover"

const IndexLayout = ({ children, bgvideo }) => {
  const {ref: heroNavRef, inView: navInView } = useInView()

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Hero ref={heroNavRef} title="The HideOut Studio" />
      <Slideover navInView={navInView} />
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
