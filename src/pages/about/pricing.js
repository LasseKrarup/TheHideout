import React from "react"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import SubPageHero from "../../components/SubPageHero"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import Markdown from "../../components/util/Markdown"
import GradientImage from "../../components/util/GradientImage"
import PriceExample from "../../components/util/PriceExample"
import { graphql } from "gatsby"
import { uniqueId } from "lodash"

const PricingPage = ({data}) => {
  const {welcome, priceExamples} = data.markdownRemark.frontmatter

  return(
    <PageLayout isContact>
      <SEO title="Pricing" />
      <SubPageHero title="Pricing" />

      <Subheading title={welcome.title} />

      <Section>
          <Markdown>
            {welcome.content}
          </Markdown>

          {welcome.image && 
            <GradientImage src={welcome.image.childImageSharp.fluid} alt="Pricing" />
          }
      </Section>

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

export default PricingPage

export const query = graphql`
query {
  markdownRemark(fields: {slug: {eq: "/about/pricing/"}}) {
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
