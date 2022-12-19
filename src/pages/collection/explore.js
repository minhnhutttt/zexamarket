import React from "react"
import {  graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "./collection.module.scss"
import SelectBox from "../../components/SelectBox"
import CategoryItem from "../../components/Category/categoryItem"
const Index = ({ data }) => {

    return (
        <Layout>
            <div className={styles.explore}>
                <div className={styles.exploreTtl}>コレクション一覧</div>
                <div className={styles.exploreHead}>
                    <SelectBox label="並び順" values={['新着順', '新着順', '新着順']} />
                </div>
                <div className={styles.exploreCategoryWrap}>
                    {data.allCatDataJson.edges.map((item, index) => {
                        return (
                            <CategoryItem key={index} name={item.node.name} imgSrc={item.node.image.childImageSharp.fluid} />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query getCollectionExplore {
    allCatDataJson {
        edges {
          node {
            id
            name
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
  }
`
export const Head = () => <Seo title="Explore" />

export default Index
