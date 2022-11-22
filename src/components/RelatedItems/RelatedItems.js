import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import CardItems from "../Card/CardItems";
import * as styles from "./RelatedItems.module.scss"
import { FaImages } from 'react-icons/fa';
import ButtonLink from "../Button/ButtonLink";

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
        <div className={styles.related}>
            <h4 className={styles.relatedTtl}><p><FaImages /><span>コレクションの他のアイテム</span></p></h4>
            <CardItems data={data.allTopDataJson.edges} />
            <ButtonLink to="#">もっと見る</ButtonLink>
        </div>
    )
}

export default RelatedItems