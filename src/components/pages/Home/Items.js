import React from "react";
import Title from "../../Title/Title"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./Items.module.scss"
import ButtonLink from "../../Button/ButtonLink";
import CardItems from "../../Card/CardItems";

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
  return (
    <div className={styles.items}>
      <Title>販売中 NFTs</Title>
      <CardItems data={data.allTopDataJson.edges} />
      <ButtonLink to="#">もっと見る</ButtonLink>
    </div>
  )
}

export default Items