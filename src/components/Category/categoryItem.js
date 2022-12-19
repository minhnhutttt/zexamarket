import React, { useEffect, useContext } from "react"
import * as styles from "./Category.module.scss"
import * as animated from "../../styles/animated.module.scss"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { ObserverContext } from "../../provider/IntersectionObserverProvider"
import { handleObserver } from "../../utils/IntersectionObserver"
const CategoryItem = ({name, imgSrc, key}) => {
    const { toTargets, targets } = useContext(ObserverContext)

    useEffect(() => {
        handleObserver(targets)
    }, [targets])
    return (
        <Link
            to="#"
            ref={toTargets}
            className={`${styles.categoryItem} ${animated.fadein}`}
            key={key}
        >
            <div className={styles.categoryItemInner}>
                <div>
                    <Img fluid={imgSrc} />
                </div>
                <p className={styles.categoryItemName}>{name}</p>
            </div>
        </Link>
    )
}

export default CategoryItem
