import React from "react"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import PageHero from "../../components/PageHero"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import { graphql } from "gatsby"
import Markdown from "../../components/util/Markdown"
import GradientImage from "../../components/util/GradientImage"


const AboutPage = ({data}) => {
  const {welcome} = data.markdownRemark.frontmatter
  
  return(
    <PageLayout>
      <SEO title="About us" />
      <PageHero title="About us" />

      <Subheading title={welcome.title} />

      <Section>
          <Markdown>
            {welcome.content}
          </Markdown>

          <GradientImage src={welcome.image.childImageSharp.fluid} alt="The HideOut Studio" />
      </Section>
    </PageLayout>
  )
}

export default AboutPage

export const query = graphql`
query {
  markdownRemark(fields: {slug: {eq: "/about/"}}) {
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
