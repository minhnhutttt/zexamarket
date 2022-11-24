import React, { useEffect, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardItems from "../Card/CardItems"
import * as styles from "./relatedItems.module.scss"
import { FaImages } from "react-icons/fa"
import ButtonLink from "../Button"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider"
import { handleObserver } from "../../utils/IntersectionObserver"

const RelatedItems = () => {
  const data = useStaticQuery(graphql`
    query Related {
      allTopDataJson(limit: 5) {
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
    <div className={styles.related}>
      <h4 ref={toTargets} className={`${styles.relatedTtl} ${animated.fadein}`}>
        <p>
          <FaImages />
          <span>コレクションの他のアイテム</span>
        </p>
      </h4>
      <CardItems data={data.allTopDataJson.edges} />
      <ButtonLink href="#">もっと見る</ButtonLink>
    </div>
  )
}

export default RelatedItems
