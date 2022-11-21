import React from "react";
import Img from "gatsby-image"
import * as styles from "./Card.module.scss"
import { FaHeart } from 'react-icons/fa';

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
                            <button type="button" className={styles.cardFavouriteIcon}>
                                <FaHeart style={{color: props.myFavourite ? "#fff" : "#db0039"}} />
                            </button>
                            <p className={styles.cardFavouriteNumber}>{props.favourite}</p>
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default CardItem