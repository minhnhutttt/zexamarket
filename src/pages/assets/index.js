import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "./assets.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import CardItems from "../../components/Card/CardItems"
import SelectBox from "../../components/SelectBox"
const Index = ({ data }) => {
  const allProducts = data.allTopDataJson.edges
  const [products, setProducts] = useState([...allProducts.slice(0, 12)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(allProducts.length > 12)
  const handleLoadMore = () => {
    setLoadMore(true)
  }
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = products.length
      const isMore = currentLength < allProducts.length
      const nextResults = isMore
        ? allProducts.slice(currentLength, currentLength + 8)
        : []
      setProducts([...products, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  useEffect(() => {
    const isMore = products.length < allProducts.length
    setHasMore(isMore)
  }, [products]) //eslint-disable-line
  return (
    <Layout>
      <div className={styles.assets}>
        <div className={styles.assetsTtl}>NFT一覧</div>
        <div className={styles.assetsHead}>
          <SelectBox />
        </div>


        <CardItems data={products} />
        {hasMore && (
          <div className={styles.collectionBtn}>
            <button onClick={handleLoadMore}>
              <StaticImage src="../../images/more.png" alt="more" />
            </button>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getCollection {
    allTopDataJson {
      edges {
        node {
          id
          favourite
          myFavourite
          name
          price
          div
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
          user {
            avatar {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
            nickname
          }
        }
      }
      totalCount
    }
  }
`
export const Head = () => <Seo title="Assets" />

export default Index
