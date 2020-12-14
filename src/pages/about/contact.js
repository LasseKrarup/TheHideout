import React from "react"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import SubPageHero from "../../components/SubPageHero"
import Paragraph from "../../components/atoms/Paragraph"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import useViewport from "../../hooks/useViewport"

const Label = ({children, className, ...rest}) => (
  <label {...rest} className={`font-heading text-md text-white ${className} overflow-hidden w-24 md:text-lg md:w-32 lg:text-xl xl:text-2xl xl:w-36`}>{children}</label>
)
const Input = (props) => {
  const {width} = useViewport()
  let size = 16;
  if (width >= 375) size = 20;
  if (width >= 640) size = 30;
  if (width >= 1024) size = 40;
  return(
    <input {...props} size={size} className={`bg-black text-gray-400 border-b border-solid p-2 border-gray-600 max-w-max focus:border-white focus:outline-none`}></input>
  )
}

const ContactForm = () => {
  const {width} = useViewport()
  return(
    <div className="flex flex-col items-center overflow-hidden mb-8">
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact-form" className="text-white bg-transparent flex flex-col">
        <span className="flex items-center"><Label htmlFor="name">name</Label><Input type="text" name="name" placeholder={`${width >= 640 ? "WRITE YOUR " : ""}NAME HERE`} /></span>
        <span className="flex items-center"><Label htmlFor="email">email</Label><Input type="email" name="email" pattern=".+@.*\..+" placeholder={`${width >= 640 ? "WRITE YOUR " : ""}EMAIL HERE`} /></span>
        <span className="flex items-center"><Label htmlFor="phone">phone#</Label><Input type="text" name="phone" pattern="^\+?[0-9]+$" placeholder={`${width >= 640 ? "WRITE YOUR " : ""}PHONE# HERE`} /></span>
        <textarea className="text-gray-400 mt-2 bg-black border border-gray-600 rounded-md p-2 focus:outline-none focus:border-white" name="message" placeholder="WRITE YOUR MESSAGE HERE" rows="6"></textarea>
        <input type="hidden" name="form-name" value="contact-form" />
        <button type="submit" className="rounded-md font-heading lowercase text-lg border border-white p-2 my-2 mr-auto">Send</button>
      </form>
    </div>
  )
}

const ContactPage = () => {
  return(
    <PageLayout isContact>
      <SEO title="Contact" />
      <SubPageHero title="Contact" />

      <Subheading title="Get in touch" />

      <Section>
          <Paragraph className="text-gray-300">
            He’d waited in the center of his closed left eyelid. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the blowers and the amplified breathing of the fighters. Before they could stampede, take flight from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.
          </Paragraph>
      </Section>

      <ContactForm/>

    </PageLayout>
  )
}

export default ContactPage
