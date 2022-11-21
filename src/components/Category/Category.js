import React from "react";
import * as styles from "./Category.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title/Title"
import Img from "gatsby-image"
import ButtonLink from "../Button/ButtonLink";
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
    console.log(data)
    return (
        <div className={styles.category}>
            <Title>コレクション</Title>
            <div className={styles.categoryWrap}>
            {
            data.allCatDataJson.edges.map((item, index) => {
                return (
                <div className={styles.categoryItem} key={index}>
                    <div className={styles.categoryItemInner}>
                        <div className={styles.categoryItemImg}>
                            <Img fluid={item.node.image.childImageSharp.fluid} />
                        </div>
                        <p className={styles.categoryItemName}>
                            {item.node.name}
                        </p>
                    </div>
                </div>
                )
            })
            }
        </div>
        <ButtonLink to="#">もっと見る</ButtonLink>
        </div>
    )
}

export default Category