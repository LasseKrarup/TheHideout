import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import SubPageHero from "../../components/SubPageHero"
import Markdown from "../../components/util/Markdown"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import GradientImage from "../../components/util/GradientImage"


const LivesessionsPage = ({data}) => {
  const {welcome} = data.markdownRemark.frontmatter
  
  return(
    <PageLayout>
      <SEO title="Live Sessions" />
      <SubPageHero title="Live Sessions" />

      <Subheading title={welcome.title} />

      <Section>
          <Markdown>
            {welcome.content}
          </Markdown>

          {welcome.image && <GradientImage src={welcome.image.childImageSharp.fluid} alt="Studio" style={{height: "600px"}}/>}
      </Section>
    </PageLayout>
  )
}

export default LivesessionsPage

export const query = graphql`
query {
  markdownRemark(fields: {slug: {eq: "/studio/livesessions/"}}) {
    frontmatter {
      welcome {
        title
        content
        image {
          ...ImageFragment
        }
      }
    }
  }
}
`
