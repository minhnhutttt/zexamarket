import React from "react";
import * as styles from "./Title.module.scss"

const Title = ({children}) => {
    return (
        <h3 className={styles.title}>
            {children}
        </h3>
    )
}
export default Title