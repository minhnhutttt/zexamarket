import * as React from "react"

import Layout from "../components/layout"
import Mainvisual from "../components/Mainvisual/Mainvisual"
import Items from "../components/pages/Home/Items"
import Category from "../components/Category/Category"
import Video from "../components/pages/Home/Video"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
      <Mainvisual />
      <Items />
      <Category />
      <Video />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
