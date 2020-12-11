import React from "react"
// import { Link } from "gatsby"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import PageHero from "../../components/PageHero"
import Paragraph from "../../components/atoms/Paragraph"
import Section from "../../components/Section"

import PhotographyImage from "../../images/studio/jason-wong-uBn9T18v4iU-unsplash.jpg"
import Subheading from "../../components/atoms/Subheading"
import GradientImage from "../../components/util/GradientImage"
import PriceExample from "../../components/util/PriceExample"


const PhotographyPage = () => {
  return(
    <PageLayout>
      <SEO title="Photography" />
      <PageHero title="Photography" />

      <Subheading title="Stills. Headshots. Concerts." />

      <Section>
          <Paragraph className="text-gray-300">
            After the postoperative check at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. He woke and found her stretched beside him in the center of his closed left eyelid. Its hands were holograms that altered to match the convolutions of the arcade showed him broken lengths of damp chipboard and the drifting shoals of waste.
          </Paragraph>

          <GradientImage src={PhotographyImage} alt="Photography camera" />
      </Section>


      <Subheading title="Price examples" />
      <Section>
        <PriceExample title="Headshots" price="4.000 DKK">
          The alarm still oscillated, louder here, the rear of the spherical chamber. Its hands were holograms that altered to match the convolutions of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
        </PriceExample>

        <PriceExample title="Concert photos" price="5.000 DKK">
          Light from a service hatch at the rear of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
        </PriceExample>
      </Section>
    </PageLayout>
  )
}

export default PhotographyPage
