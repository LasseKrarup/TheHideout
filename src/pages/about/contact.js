import React from "react"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import SubPageHero from "../../components/SubPageHero"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import ContactForm from "../../components/ContactForm"
import Markdown from "../../components/util/Markdown"
import GradientImage from "../../components/util/GradientImage"
import { graphql } from "gatsby"

const ContactPage = ({data}) => {
  const {welcome} = data.markdownRemark.frontmatter

  return(
    <PageLayout isContact>
      {/* eslint-disable-next-line */}
      <SEO title="Contact" />
      <SubPageHero title="Contact" />

      <Subheading title={welcome.title} />

      <Section>
          <Markdown>
            {welcome.content}
          </Markdown>
      </Section>

      <ContactForm />

      {welcome.image && 
        <Section>
          <GradientImage src={welcome.image.childImageSharp.fluid} alt="Contact Hideout" />
        </Section>
      }
      

    </PageLayout>
  )
}

export default ContactPage

export const query = graphql`
query {
  markdownRemark(fields: {slug: {eq: "/about/contact/"}}) {
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
