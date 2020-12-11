import React from "react"
// import { Link } from "gatsby"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import PageHero from "../../components/PageHero"
import Paragraph from "../../components/atoms/Paragraph"
import Section from "../../components/Section"

import StudioImage from "../../images/studio/leo-wieling-bG8U3kaZltE-unsplash.jpg"
import Subheading from "../../components/atoms/Subheading"
import GradientImage from "../../components/util/GradientImage"
import PriceExample from "../../components/util/PriceExample"


const StudioPage = () => {
  return(
    <PageLayout>
      <SEO title="Studio" />
      <PageHero title="Studio" />

      <Subheading title="Recording. Mixing. Mastering." />

      <Section>
          <Paragraph className="text-gray-300">
            He’d waited in the center of his closed left eyelid. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the blowers and the amplified breathing of the fighters. Before they could stampede, take flight from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.
          </Paragraph>

          <GradientImage src={StudioImage} alt="Studio" />
      </Section>


      <Subheading title="Price examples" />
      <Section>
        <PriceExample title="5 days in the studio" price="25.000 DKK">
          The alarm still oscillated, louder here, the rear of the spherical chamber. Its hands were holograms that altered to match the convolutions of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
        </PriceExample>

        <PriceExample title="Solo gig, 2 days" price="8.000 DKK">
          Light from a service hatch at the rear of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
        </PriceExample>
      </Section>
    </PageLayout>
  )
}

export default StudioPage
