import React, { useEffect, useContext } from "react"
import * as styles from "./SelectBox.module.scss"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider"
import { handleObserver } from "../../utils/IntersectionObserver"
import { FaAngleDown } from "react-icons/fa"
const SelectBox = ({label, values = []}) => {
  const { toTargets, targets } = useContext(ObserverContext)

  useEffect(() => {
    handleObserver(targets)
  }, [targets])
  return (
    <div ref={toTargets} className={`${styles.selectBox} ${animated.fadein}`}>
        <div className={styles.selectBoxWrap}>
            <p>{label}</p>
            <label class={styles.selectBoxItem} for="slct">
                <select id="slct" required="required">                    
                    {values.map(value => {
                        return (
                            <option value="#">{value}</option>
                        )
                    })}
                </select>
            <FaAngleDown />
            </label>
        </div>
    </div>
  )
}
export default SelectBox
