import * as React from "react"

import Layout from "../../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../../components/Seo"

const Single = ({data}) => {
    console.log(data)
    return (
        <Layout>
        </Layout>
    )
}

export const query = graphql`
    query getSingleNFT($id:String) {
    topDataJson(id: {eq: $id}) {
        id
        name
        logo {
        childImageSharp {
            fluid {
            src
            }
        }
        }
        image {
        childImageSharp {
            fluid {
            src
            }
        }
        }
    }
    }
`

export const Head = () => <Seo title="Home" />

export default Single
