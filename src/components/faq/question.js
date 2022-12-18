import * as React from "react"
import { useEffect, useContext } from 'react'
import { ObserverContext } from "../../provider/IntersectionObserverProvider";
import { handleObserver } from '../../utils/IntersectionObserver'
import * as styles from "./question.module.scss"
const Question = ({ id, question, answer }) => {
    const [isActive, setActive] = React.useState(false);
    const { toTargets, targets } = useContext(ObserverContext);

    const handleClick = (id) => {
        setActive(!isActive)
    }

    useEffect(() => {
      handleObserver(targets)
    }, [targets])
    return (
        <div ref={toTargets} className={styles.questionWrapper}>
            <div className={styles.question} id={id}>
                <h3>{question}</h3>
                <button onClick={() => handleClick(id)} className={isActive ? `${styles.faqToggle} ${styles.isActive}` : `${styles.faqToggle}`}>
                </button>
            </div>
            <div className={isActive ? `${styles.answer} ${styles.active}` : `${styles.answer}`}>{answer}</div>
        </div>
    )
}


export default Question
