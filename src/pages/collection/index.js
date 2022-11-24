import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "./collection.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import CardItems from "../../components/Card/CardItems"

const Index = ({ data }) => {
  const allProducts = data.allTopDataJson.edges
  const [products, setProducts] = useState([...allProducts.slice(0, 15)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(allProducts.length > 15)
  const handleLoadMore = () => {
    setLoadMore(true)
  }
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = products.length
      const isMore = currentLength < allProducts.length
      const nextResults = isMore
        ? allProducts.slice(currentLength, currentLength + 10)
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
            <div className={styles.collection}>
                <div>
                    <StaticImage src="../../images/collection-title.png" alt="ZEXAMARKET" />
                </div>
                <div className={styles.collectionBrand}>
                    <div className={styles.collectionBrandLogo}>
                        <StaticImage src="../../images/logo-01.png" alt="刻良NFT" />
                    </div>
                    <div className={styles.collectionBrandContent}>
                        <p className={styles.collectionBrandName}>刻良NFT</p>
                        <p className={styles.collectionBrandTxt}>
                            刻良ウイスキーが入った樽は計5樽あり、その中身は合計2,000本の700ml瓶にボトリングされます。<br />
                            ボトリングされる順にシリアル番号化する事で、固有性を持つ「刻良NFT」が発行されます。<br />
                            30年後に樽からボトリングされた刻良ウイスキー現物を「刻良NFTオーナー」に発送します。
                        </p>
                    </div>
                </div>
            <div className={styles.collectionCount}>
              アイテム:{data.allTopDataJson.totalCount}
            </div>
          <CardItems data={products} />
          {hasMore && (
            <div className={styles.collectionBtn}>
              <button onClick={handleLoadMore}><StaticImage src="../../images/more.png" alt="more" /></button>
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
export const Head = () => <Seo title="Collection" />

export default Index
