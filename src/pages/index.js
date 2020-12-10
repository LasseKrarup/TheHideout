import React from "react"
import { Link } from "gatsby"

import IndexLayout from "../layouts/IndexLayout"
import SEO from "../components/Seo"
import TopImage from "../images/studio/jeffery-erhunse-WJwRr3pW5FA-unsplash.jpg";
import StudioImage from "../images/studio/leo-wieling-bG8U3kaZltE-unsplash.jpg"
import VideoImage from "../images/studio/pexels-roman-koval-4040362.jpg"
import PhotographyImage from "../images/studio/jason-wong-uBn9T18v4iU-unsplash.jpg"

const IndexSection = ({src, title, children}) => {
  return(
    <section className="my-8">
      <div className="relative overflow-hidden">
        <h3 className="text-center text-xl relative z-10">{title}</h3>
        <div className="relative z-10 text-gray-300 p-4">
          {children}
        </div>
        <div className="relative overflow-hidden h-full">
          <img src={src} alt="Video camera" className="opacity-75" />
          <div className="bg-gradient-to-b from-black via-transparent to-black absolute inset-0"></div>
        </div>
      </div>
    </section>
  )
}

const Paragraph = ({children}) => (
  <p className="py-2">
    {children}
  </p>
)

const ButtonLink = ({children, to}) => (
  <Link className="border border-white rounded-md px-2 py-1 hover:text-yellow-300 hover:border-yellow-300" to={to}>{children}</Link>
)

const IndexPage = () => (
  <IndexLayout>
    <SEO title="The Hideout Studio" />

    <section className="px-2 my-8">
      <h2 className="text-2xl">Studio in the heart of Aalborg, DK</h2>
      <p className="py-4">I'm baby retro synth ennui, plaid 8-bit freegan put a bird on it four dollar toast kinfolk migas chartreuse authentic. Vice photo booth keytar, ennui hella stumptown ramps poke twee narwhal. Subway tile copper mug echo park wayfarers edison bulb actually lo-fi poutine jianbing umami selfies tote bag ramps.
      </p>
      <img src={TopImage} alt="Guy in studio" />
    </section>

    <IndexSection src={StudioImage} title="Studio">
      <Paragraph>
        We do high class studio recordings in our amazing facilities. Our mixing and mastering engineer is there to see your product through to the end.
      </Paragraph>
      <Paragraph>
        Whether you want to record a single, an EP or an album, we've got you covered. We also do live streams. 
      </Paragraph>
      <Paragraph>Read more on our <ButtonLink to="/studio">Studio page</ButtonLink>
      </Paragraph>
    </IndexSection>

    <IndexSection src={VideoImage} title="Video">
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

    <IndexSection src={PhotographyImage} title="Photography">
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
