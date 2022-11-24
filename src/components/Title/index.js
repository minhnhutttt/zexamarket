import React, { useEffect, useContext } from "react"
import * as styles from "./title.module.scss"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider"
import { handleObserver } from "../../utils/IntersectionObserver"
const Title = ({ children }) => {
  const { toTargets, targets } = useContext(ObserverContext)

  useEffect(() => {
    handleObserver(targets)
  }, [targets])
  return (
    <h3 ref={toTargets} className={`${styles.title} ${animated.fadein}`}>
      {children}
    </h3>
  )
}
export default Title
