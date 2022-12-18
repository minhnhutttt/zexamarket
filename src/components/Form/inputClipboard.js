import * as React from "react"
import { useEffect, useContext } from 'react'
import { ObserverContext } from "../../provider/IntersectionObserverProvider";
import { handleObserver } from '../../utils/IntersectionObserver'
import * as styles from "./form.module.scss"
import { StaticImage } from "gatsby-plugin-image"
const InputClipboard = ({ label, name, value = ""}) => {
    const { toTargets, targets } = useContext(ObserverContext);

    useEffect(() => {
      handleObserver(targets)
    }, [targets])

    return (
        <div ref={toTargets} className={`${styles.input} ${styles.inputClipboard}`}>
            <label for={'id_' + name}>{label}</label>
            <div className={styles.inputWrap}><input type="text" id={'id_' + name} name={name} value={value} readOnly />
            <button type="button" className={styles.inputClipboardIcon} onClick={() => {navigator.clipboard.writeText(value)}}>
                <StaticImage src="../../images/ic-copy.png" alt="" />
            </button>
            </div>
        </div>
    )
}

export default InputClipboard
