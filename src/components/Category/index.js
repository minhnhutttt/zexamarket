import React, { useEffect, useContext } from "react";
import * as styles from "./category.module.scss"
import * as animated from "../../styles/animated.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import Img from "gatsby-image"
import ButtonLink from "../Button";
import { ObserverContext } from "../../provider/IntersectionObserverProvider";
import { handleObserver } from '../../utils/IntersectionObserver'
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
    const { toTargets, targets } = useContext(ObserverContext);

    useEffect(() => {
        handleObserver(targets)
    }, [targets])
    return (
        <div className={styles.category}>
            <Title>コレクション</Title>
            <div className={styles.categoryWrap}>
            {
            data.allCatDataJson.edges.map((item, index) => {
                return (
                <div  ref={toTargets} className={`${styles.categoryItem} ${animated.fadein}`} key={index}>
                    <div className={styles.categoryItemInner}>
                        <div>
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