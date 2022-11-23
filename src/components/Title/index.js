import React, { useContext } from "react";
import * as styles from "./title.module.scss"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider";
const Title = ({children}) => {
    const { toTargets } = useContext(ObserverContext);
    return (
        <h3 ref={toTargets} className={`${styles.title} ${animated.fadein}`}>
            {children}
        </h3>
    )
}
export default Title