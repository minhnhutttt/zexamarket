import * as React from "react"

import Layout from "../components/layout"
import Mainvisual from "../components/Mainvisual/Mainvisual"
import Items from "../components/pages/Home/Items"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
      <Mainvisual />
      <Items />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
