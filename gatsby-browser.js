/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import React from "react"
import { IntersectionObserverProvider } from "./src/provider/IntersectionObserverProvider"

export const wrapRootElement = ({ element }) => (
  <IntersectionObserverProvider>{element}</IntersectionObserverProvider>
)
