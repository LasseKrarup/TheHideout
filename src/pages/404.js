import React from "react"

import IndexLayout from "../layouts/IndexLayout"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <IndexLayout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </IndexLayout>
)

export default NotFoundPage
