import React, { useEffect, useContext } from "react";
import * as styles from "./button.module.scss"
import { Link } from "gatsby"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider";
import { handleObserver } from '../../utils/IntersectionObserver'

const ButtonLink = ({ href = "#", children}) => {
    const { toTargets, targets } = useContext(ObserverContext);

    useEffect(() => {
        handleObserver(targets)
    }, [targets])
    return (
        <Link ref={toTargets} to={href} type="button" className={`${styles.button} ${animated.fadein}`}>
            {children}
        </Link>
    )
}

export default ButtonLink