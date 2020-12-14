import React from "react"

import PageLayout from "../layouts/PageLayout"
import SEO from "../components/Seo"
import SubPageHero from "../components/SubPageHero"
import Section from "../components/Section"

import Subheading from "../components/atoms/Subheading"
import Paragraph from "../components/atoms/Paragraph"
import ButtonLink from "../components/atoms/ButtonLink"


const SuccessPage = () => {
  return(
    <PageLayout isContact>
      <SEO title="Success!" />
      <SubPageHero title="Success" />

      <Subheading title="We got your message" />

      <Section>
        <Paragraph>
            Thanks for reaching out to us! We will get in touch with you as soon as possible.
        </Paragraph>

        <Paragraph className="text-gray-500">
            On the off chance that something <em>did</em> go wrong, and we don't get back to you, we're very sorry. Try sending us a manual email at <strong>contact@thehideout.dk</strong>
        </Paragraph>

        <div className="flex my-16 justify-center">
            <ButtonLink to="/" className="text-white text-xl">Go back to the home page</ButtonLink>
        </div>  
      </Section>


    </PageLayout>
  )
}

export default SuccessPage
