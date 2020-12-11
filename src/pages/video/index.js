import React from "react"
// import { Link } from "gatsby"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import PageHero from "../../components/PageHero"
import Paragraph from "../../components/atoms/Paragraph"
import Section from "../../components/Section"

import VideoImage from "../../images/studio/pexels-roman-koval-4040362.jpg"
import Subheading from "../../components/atoms/Subheading"
import GradientImage from "../../components/util/GradientImage"
import PriceExample from "../../components/util/PriceExample"


const VideoPage = () => {
  return(
    <PageLayout>
      <SEO title="Video" />
      <PageHero title="Video" />

      <Subheading title="Promotion. Livestreams. MusicVideos." />

      <Section>
          <Paragraph className="text-gray-300">
            Now this quiet courtyard, Sunday afternoon, this girl with a hand on his chest. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
          </Paragraph>

          <GradientImage src={VideoImage} alt="Video camera" />
      </Section>


      <Subheading title="Price examples" />
      <Section>
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

export default VideoPage
