import React, { useEffect, useContext } from "react"
import Title from "../../Title"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./items.module.scss"
import ButtonLink from "../../Button"
import CardItems from "../../Card/CardItems"
import { ObserverContext } from "../../../provider/IntersectionObserverProvider"
import { handleObserver } from "../../../utils/IntersectionObserver"
const Items = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allTopDataJson(limit: 10) {
        edges {
          node {
            id
            collection
            favourite
            myFavourite
            name
            price
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
            logo {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
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
    <div ref={toTargets} className={styles.items}>
      <Title>販売中 NFTs</Title>
      <CardItems data={data.allTopDataJson.edges} />
      <ButtonLink to="#">もっと見る</ButtonLink>
    </div>
  )
}

export default Items
