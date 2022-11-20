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
            {
                !props.isSlider && (
                    <>
                        <p className={styles.cardPrice}>
                            {props.price}
                        </p>
                        <div className={styles.cardFavourite}>
                            <div className={styles.cardFavouriteIcon}>
                               
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default CardItem