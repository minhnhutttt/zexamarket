/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/styles.scss"
import { IntersectionObserverProvider } from "../provider/IntersectionObserverProvider";
const Layout = ({ children }) => {
  return (
    <>
      <IntersectionObserverProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </IntersectionObserverProvider>
    </>
  )
}

export default Layout
