import React from "react";
import Title from "../../Title/Title"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./Home.module.scss"
import CardItem from "../../Card/CardItem"

const Items = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allTopDataJson {
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
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              logo {
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
        <div className={styles.items}>
            <Title>販売中 NFTs</Title>
             <div className={styles.itemsWrap}>
             {
                data.allTopDataJson.edges.map((item, index) => {
                    return (
                        <div className={styles.item} key={index}>
                            <CardItem 
                                img={item.node.image.childImageSharp.fluid} 
                                logo={item.node.logo.childImageSharp.fluid}
                                name={item.node.name}
                                collection={item.node.collection}
                                price={item.node.price}
                                myFavourite={item.node.myFavourite}
                                favourite={item.node.favourite}
                            />
                        </div>
                    )
                })
            }
             </div>
        </div>
    )
}

export default Items