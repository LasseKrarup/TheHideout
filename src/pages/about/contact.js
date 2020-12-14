import React from "react"

import PageLayout from "../../layouts/PageLayout"
import SEO from "../../components/Seo"
import SubPageHero from "../../components/SubPageHero"
import Paragraph from "../../components/atoms/Paragraph"
import Section from "../../components/Section"

import Subheading from "../../components/atoms/Subheading"
import ContactForm from "../../components/ContactForm"

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

      <ContactForm />

    </PageLayout>
  )
}

export default ContactPage
