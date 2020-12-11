import React from "react"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import PageHero from "../../components/PageHero"
import Paragraph from "../../components/atoms/Paragraph"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"


const AboutPage = () => {
  return(
    <PageLayout>
      <SEO title="About us" />
      <PageHero title="About us" />

      <Subheading title="Who are we?" />

      <Section>
          <Paragraph className="text-gray-300">
            After the postoperative check at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. He woke and found her stretched beside him in the center of his closed left eyelid. Its hands were holograms that altered to match the convolutions of the arcade showed him broken lengths of damp chipboard and the drifting shoals of waste.
          </Paragraph>
      </Section>
    </PageLayout>
  )
}

export default AboutPage
