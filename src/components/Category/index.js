import React from "react"
import * as styles from "./Category.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import CategoryItem from "./categoryItem"
import ButtonLink from "../Button"
const Category = () => {
  const data = useStaticQuery(graphql`
    query MyQuery2 {
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
  `)
  return (
    <div className={styles.category}>
      <Title>コレクション</Title>
      <div className={styles.categoryWrap}>
        {data.allCatDataJson.edges.map((item, index) => {
          return (
              <CategoryItem key={index} name={item.node.name} imgSrc={item.node.image.childImageSharp.fluid} />
          )
        })}
      </div>
      <ButtonLink href="#">もっと見る</ButtonLink>
    </div>
  )
}

export default Category
