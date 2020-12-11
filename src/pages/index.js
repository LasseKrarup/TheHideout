import React from "react"

import IndexLayout from "../layouts/IndexLayout"
import SEO from "../components/Seo"
import Paragraph from "../components/atoms/Paragraph"
import ButtonLink from "../components/atoms/ButtonLink"
import TopImage from "../images/studio/jeffery-erhunse-WJwRr3pW5FA-unsplash.jpg";
import StudioImage from "../images/studio/leo-wieling-bG8U3kaZltE-unsplash.jpg"
import VideoImage from "../images/studio/pexels-roman-koval-4040362.jpg"
import PhotographyImage from "../images/studio/jason-wong-uBn9T18v4iU-unsplash.jpg"
import GradientImage from "../components/util/GradientImage"

const IndexSection = ({src, alt, title, children}) => {
  return(
    <section className="my-8">
      <div className="relative overflow-hidden">
        <h3 className="text-center text-xl relative z-10">{title}</h3>
        <div className="relative z-10 text-gray-300 p-4">
          {children}
        </div>
        <GradientImage src={src} alt={alt} />
      </div>
    </section>
  )
}

const IndexPage = () => (
  <IndexLayout>
    <SEO title="The Hideout Studio" />

    <section className="px-2 my-8">
      <h2 className="text-2xl">Studio in the heart of Aalborg,&nbsp;DK</h2>
      <Paragraph>
        I'm baby retro synth ennui, plaid 8-bit freegan put a bird on it four dollar toast kinfolk migas chartreuse authentic. Vice photo booth keytar, ennui hella stumptown ramps poke twee narwhal. Subway tile copper mug echo park wayfarers edison bulb actually lo-fi poutine jianbing umami selfies tote bag ramps.
      </Paragraph>
      <GradientImage src={TopImage} alt="Guy in studio" />
    </section>

    <IndexSection src={StudioImage} alt="Studio stuff" title="Studio">
      <Paragraph>
        We do high class studio recordings in our amazing facilities. Our mixing and mastering engineer is there to see your product through to the end.
      </Paragraph>
      <Paragraph>
        Whether you want to record a single, an EP or an album, we've got you covered. We also do live streams. 
      </Paragraph>
      <Paragraph>Read more on our <ButtonLink to="/studio">Studio page</ButtonLink>
      </Paragraph>
    </IndexSection>

    <IndexSection src={VideoImage} alt="Video camera" title="Video">
      <Paragraph>
        The <span className="text-yellow-300">HideOut</span> Studio also specializes in shooting video content, whether for music videos or live sessions.
      </Paragraph>
      <Paragraph>
        We can also arrange for any sort of promotional video. Feel free to contact us for more info.
      </Paragraph>
      <Paragraph>
        Read more on our <ButtonLink to="/video">Video page</ButtonLink>
      </Paragraph>
    </IndexSection>

    <IndexSection src={PhotographyImage} alt="Photography cam" title="Photography">
      <Paragraph>
        If you need any kind of photo material, we can supply that as well. With experience in both head shots, concert  photos or cover photos for any kind of publications, you're in safe hands with us.
      </Paragraph>
      <Paragraph>
        Read more on our <ButtonLink to="/photography">Photo page</ButtonLink>
      </Paragraph>
    </IndexSection>

  </IndexLayout>
)

export default IndexPage
