import React, { useEffect, useContext } from "react"
import * as styles from "./Category.module.scss"
import * as animated from "../../styles/animated.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import CategoryItem from "./categoryItem"
import ButtonLink from "../Button"
import { ObserverContext } from "../../provider/IntersectionObserverProvider"
import { handleObserver } from "../../utils/IntersectionObserver"
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
  const { toTargets, targets } = useContext(ObserverContext)

  useEffect(() => {
    handleObserver(targets)
  }, [targets])
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
