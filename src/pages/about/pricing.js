import React from "react"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import SubPageHero from "../../components/SubPageHero"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import PriceExample from "../../components/util/PriceExample"


const PricingPage = () => {
  return(
    <PageLayout>
      <SEO title="Pricing" />
      <SubPageHero title="Pricing" />

      <Subheading title="Price Examples" />

      <Section>
        <PriceExample title="5 days in the studio" price="25.000 DKK">
          The alarm still oscillated, louder here, the rear of the spherical chamber. Its hands were holograms that altered to match the convolutions of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
        </PriceExample>

        <PriceExample title="Solo gig, 2 days" price="8.000 DKK">
          Light from a service hatch at the rear of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
        </PriceExample>

        <PriceExample title="Music video" price="10.000 DKK">
          The alarm still oscillated, louder here, the rear of the spherical chamber. Its hands were holograms that altered to match the convolutions of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
        </PriceExample>

        <PriceExample title="Promotional video" price="5.000 DKK">
          Light from a service hatch at the rear of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
        </PriceExample>
      </Section>

    </PageLayout>
  )
}

export default PricingPage
