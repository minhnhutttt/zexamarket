import React from "react";
import * as styles from "./button.module.scss"
import { Link } from "gatsby"
const ButtonLink = ({ href = "#", children}) => {
    return (
        <Link to={href} type="button" className={styles.button}>
            {children}
        </Link>
    )
}

export default ButtonLink