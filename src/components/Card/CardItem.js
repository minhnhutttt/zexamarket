import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import * as styles from "./card.module.scss"
import { FaHeart } from 'react-icons/fa';

const CardItem = (props) => {
    console.log(props)
    const pathImg = props.img ? getImage(props.img) : null
    const pathLogo = props.logo ? getImage(props.logo) : null
    const pathAvatar = props.user ? getImage(props.user.avatar) : null
    return (
        <Link to={`/inventory/${props.id}`} className={styles.card}>
            <div className={styles.cardImg}>
                <GatsbyImage image={pathImg} alt={props.name} />
            </div>
            {props.logo &&
                <>
                    <div className={styles.cardLogo}>
                        <GatsbyImage image={pathLogo} alt={props.name} />
                    </div>
                    <div className={styles.cardLogoBase}></div>
                </>
            }
            <div className={styles.cardContent}>
            <p className={styles.cardName}>
                {props.name}
            </p>
            {props.collection &&
                <p className={styles.cardCollection}>
                    {props.collection}
                </p>
            }
            {
                !props.isSlider && (
                    <>
                        {props.price &&
                            <p className={styles.cardPrice}>
                                {props.price}
                            </p>
                        }
                        <div className={styles.cardFavourite}>
                            <button type="button" className={styles.cardFavouriteIcon}>
                                <FaHeart style={{color: props.myFavourite ? "#fff" : "#db0039"}} />
                            </button>
                            <p className={styles.cardFavouriteNumber}>{props.favourite}</p>
                        </div>
                    </>
                )
            }
            {props.user && (
                <div className={styles.cardUser}>
                    <GatsbyImage image={pathAvatar} alt={props.name} />
                    <p className={styles.cardUserName}>{props.user.nickname}</p>
                </div>
            )}
            </div>
        </Link>
    )
}
export default CardItem