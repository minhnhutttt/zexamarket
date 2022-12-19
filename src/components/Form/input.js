import * as React from "react"
import { useEffect, useContext } from 'react'
import { ObserverContext } from "../../provider/IntersectionObserverProvider";
import { handleObserver } from '../../utils/IntersectionObserver'
import * as styles from "./form.module.scss"
import * as animated from "../../styles/animated.module.scss"
const Input = ({ label, name, required, placeholder = "", hasCount = false }) => {
    const { toTargets, targets } = useContext(ObserverContext);

    useEffect(() => {
      handleObserver(targets)
    }, [targets])

    const [count, setCount] = React.useState(0);
    return (
        <div ref={toTargets} className={`${styles.input} ${animated.fadein}`}>
            <label for={'id_' + name}>{required && <><span>*</span></>}{label}</label>
            <div className={styles.inputWrap}><input maxlength={hasCount ? '20' : ''} type="text" id={'id_' + name} name={name} placeholder={placeholder} onChange={e => setCount(e.target.value.length)} />
            {hasCount && <p className={styles.inputCount}>{count}/20</p>}
            </div>
        </div>
    )
}

export default Input
