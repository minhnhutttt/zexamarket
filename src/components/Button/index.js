import React, { useContext } from "react";
import * as styles from "./button.module.scss"
import { Link } from "gatsby"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider";

const ButtonLink = ({ href = "#", children}) => {
    const { toTargets } = useContext(ObserverContext);
    return (
        <Link ref={toTargets} to={href} type="button" className={`${styles.button} ${animated.fadein}`}>
            {children}
        </Link>
    )
}

export default ButtonLink