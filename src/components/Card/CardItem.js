import React from "react";
import Img from "gatsby-image"
import * as styles from "./Card.module.scss"

const CardItem = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <Img fluid={props.img} />
            </div>
            <div className={styles.cardLogo}>
                <Img fluid={props.logo} />
            </div>
            <p className={styles.cardName}>
                {props.name}
            </p>
            <p className={styles.cardCollection}>
                {props.collection}
            </p>
        </div>
    )
}

export default CardItem