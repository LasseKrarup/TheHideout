import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import SubPageHero from "../../components/SubPageHero"
import Markdown from "../../components/util/Markdown"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import GradientImage from "../../components/util/GradientImage"


const ConcertphotographyPage = ({data}) => {
  const {welcome} = data.markdownRemark.frontmatter
  
  return(
    <PageLayout>
      <SEO title="Concert Photography" />
      <SubPageHero title="Concert Photography" />

      <Subheading title={welcome.title} />

      <Section>
          <Markdown>
            {welcome.content}
          </Markdown>

          {welcome.image && <GradientImage src={welcome.image.childImageSharp.fluid} alt="Concert Photography" />}
      </Section>
    </PageLayout>
  )
}

export default ConcertphotographyPage

export const query = graphql`
query {
  markdownRemark(fields: {slug: {eq: "/photography/concertphotography/"}}) {
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
