import React from "react"

import IndexLayout from "../layouts/IndexLayout"
import SEO from "../components/Seo"
import Paragraph from "../components/atoms/Paragraph"
import ButtonLink from "../components/atoms/ButtonLink"
import GradientImage from "../components/util/GradientImage"
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"
import { graphql } from "gatsby"
import Markdown from "../components/util/Markdown"

const IndexSection = ({src, alt, title, children, className, prominent, reverse}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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

const IndexPage = ({data}) => {
  const {markdownRemark: {frontmatter: sections}} = data
  
  return(
    <IndexLayout>
      <SEO title="The Hideout Studio" />
      <IndexSection className="mt-8" src={sections.welcome.image.childImageSharp.fluid} alt="Guy in studio" title={sections.welcome.title} prominent>
        <Markdown>
          {sections.welcome.content}
        </Markdown>
      </IndexSection>

      <IndexSection src={sections.studio.image.childImageSharp.fluid} alt="Studio stuff" title={sections.studio.title}>
        <Markdown>
          {sections.studio.content}
        </Markdown>
        <Paragraph>Read more on our <ButtonLink to="/studio">Studio page</ButtonLink>
        </Paragraph>
      </IndexSection>

      <IndexSection src={sections.video.image.childImageSharp.fluid} alt="Video camera" title={sections.video.title} reverse>
        <Markdown>
          {sections.video.content}
        </Markdown>
        <Paragraph>
          Read more on our <ButtonLink to="/video">Video page</ButtonLink>
        </Paragraph>
      </IndexSection>

      <IndexSection src={sections.photo.image.childImageSharp.fluid} alt="Photography cam" title={sections.photo.title}>
        <Markdown>
            {sections.photo.content}
        </Markdown>
        <Paragraph>
          Read more on our <ButtonLink to="/photography">Photo page</ButtonLink>
        </Paragraph>
      </IndexSection>

    </IndexLayout>
  )
}

export default IndexPage

export const query = graphql`
query {
  markdownRemark(fields: {slug: {eq: "/"}}) {
    frontmatter {
      welcome {
        content
        title
        image {
          ...ImageFragment
        }
      }
      studio {
        content
        title
        image {
          ...ImageFragment
        }
      }
      video {
        content
        title
        image {
          ...ImageFragment
        }
      }
      photo {
        content
        title
        image {
          ...ImageFragment
        }
      }
    }
  }
}
`