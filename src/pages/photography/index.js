import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import PageHero from "../../components/PageHero"
import Markdown from "../../components/util/Markdown"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import GradientImage from "../../components/util/GradientImage"
import PriceExample from "../../components/util/PriceExample"
import { uniqueId } from "lodash"


const PhotographyPage = ({data}) => {
  const {welcome, priceExamples} = data.markdownRemark.frontmatter
  
  return(
    <PageLayout>
      <SEO title="Photography" />
      <PageHero title="Photography" />

      <Subheading title={welcome.title} />

      <Section>
          <Markdown>
            {welcome.content}
          </Markdown>

          <GradientImage src={welcome.image.childImageSharp.fluid} alt="Photography" style={{height: "600px"}}/>
      </Section>


      <Subheading title="Price examples" />
      <Section>
        {priceExamples.map((item) => 
        <PriceExample key={uniqueId()} title={item.title} price={item.price}>
          {item.content}
        </PriceExample>
        )}
      </Section>
    </PageLayout>
  )
}

export default PhotographyPage

export const query = graphql`
query {
  markdownRemark(fields: {slug: {eq: "/photography/"}}) {
    frontmatter {
      welcome {
        title
        content
        image {
          ...ImageFragment
        }
      }
      priceExamples{
        title
        content
        price
      }
    }
  }
}
`
