import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import SubPageHero from "../../components/SubPageHero"
import Markdown from "../../components/util/Markdown"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import GradientImage from "../../components/util/GradientImage"


const MusicvideosPage = ({data}) => {
  const {welcome} = data.markdownRemark.frontmatter
  
  return(
    <PageLayout>
      <SEO title="Music Videos" />
      <SubPageHero title="Music Videos" />

      <Subheading title={welcome.title} />

      <Section>
          <Markdown>
            {welcome.content}
          </Markdown>

          {welcome.image && <GradientImage src={welcome.image.childImageSharp.fluid} alt="Music Videos" />}
      </Section>
    </PageLayout>
  )
}

export default MusicvideosPage

export const query = graphql`
query {
  markdownRemark(fields: {slug: {eq: "/video/musicvideos/"}}) {
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
