import * as React from "react"
import { useEffect, useContext } from 'react'
import { ObserverContext } from "../../provider/IntersectionObserverProvider";
import { handleObserver } from '../../utils/IntersectionObserver'
import * as styles from "./form.module.scss"
import { StaticImage } from "gatsby-plugin-image"
const InputLink = ({ label, name, required, placeholder = ""}) => {
    const { toTargets, targets } = useContext(ObserverContext);

    useEffect(() => {
      handleObserver(targets)
    }, [targets])

    return (
        <div ref={toTargets} className={`${styles.input} ${styles.inputLink}`}>
            <label for={'id_' + name}>{required && <><span>*</span></>}{label}</label>
            <div className={styles.inputWrap}><input type="text" id={'id_' + name} name={name} placeholder={placeholder} />
            <p className={styles.inputLinkIcon}>
                <StaticImage src="../../images/ic-link.png" alt="" />
            </p>
            </div>
        </div>
    )
}

export default InputLink
