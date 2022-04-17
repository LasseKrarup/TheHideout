import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import SubPageHero from "../../components/SubPageHero"
import Markdown from "../../components/util/Markdown"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import GradientImage from "../../components/util/GradientImage"


const StreamingPage = ({data}) => {
  const {welcome} = data.markdownRemark.frontmatter
  
  return(
    <PageLayout>
      {/* eslint-disable-next-line */}
      <SEO title="Streaming" />
      <SubPageHero title="Streaming" />

      <Subheading title={welcome.title} />

      <Section>
          <Markdown>
            {welcome.content}
          </Markdown>

          {welcome.image && <GradientImage src={welcome.image.childImageSharp.fluid} alt="Studio" />}
      </Section>
    </PageLayout>
  )
}

export default StreamingPage

export const query = graphql`
query {
  markdownRemark(fields: {slug: {eq: "/studio/streaming/"}}) {
    frontmatter {
      welcome {
        title
        content
        image {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
}
`
