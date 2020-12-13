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
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

const IndexSection = ({src, alt, title, children, className, prominent, reverse}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: "100px",
  })

  const {opacity: o, transform} = useSpring({
    from: {opacity: 0, transform: -100},
    opacity: inView ? 1 : 0,
    transform: inView ? 0 : -100,
    delay: 200
  })

  return(
    <animated.section ref={ref} className={`my-8 xl:py-8`} style={{transform: transform.to(t => `translateY(${t}px)`), opacity: o.to(o=>o)}}>
      <div className={`relative overflow-hidden xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:gap-4 xl:justify-center ${className}`}>
        <div className={`xl:py-16 xl:col-span-1 xl:flex xl:flex-col xl:justify-center xl:row-start-1 ${reverse && "xl:col-start-2"} ${prominent && "xl:col-span-2 xl:col-start-1"}`}>
          <h3 className={`text-center text-xl relative z-10 lg:text-2xl xl:text-left xl:pl-4 ${prominent && "xl:text-3xl xl:text-center xl:text-yellow-300"}`}>{title}</h3>
          <div className={`relative z-10 text-gray-300 p-4 ${prominent && "xl:max-w-2xl xl:text-lg xl:mx-auto"}`}>
            {children}
          </div>
        </div>
        <GradientImage src={src} alt={alt} className={`lg:-mt-32 xl:-mt-0 xl:col-span-1 xl:row-start-1 ${reverse && "xl:col-start-1"} ${prominent && "xl:col-span-2 xl:col-start-1"}`} />
      </div>
    </animated.section>
  )
}
IndexSection.defaultProps = {
  reverse: false,
  prominent: false
}

const IndexPage = () => (
  <IndexLayout>
    <SEO title="The Hideout Studio" />

    <IndexSection className="mt-8" src={TopImage} alt="Guy in studio" title="Studio in the heart of Aalborg,&nbsp;DK" prominent>
      <Paragraph>
        I'm baby retro synth ennui, plaid 8-bit freegan put a bird on it four dollar toast kinfolk migas chartreuse authentic. Vice photo booth keytar, ennui hella stumptown ramps poke twee narwhal. Subway tile copper mug echo park wayfarers edison bulb actually lo-fi poutine jianbing umami selfies tote bag ramps.
      </Paragraph>
    </IndexSection>

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

    <IndexSection src={VideoImage} alt="Video camera" title="Video" reverse>
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
