import React, { useEffect, useContext } from "react"
import * as styles from "./SelectBox.module.scss"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider"
import { handleObserver } from "../../utils/IntersectionObserver"
import { FaAngleDown } from "react-icons/fa"
const SelectBox = () => {
  const { toTargets, targets } = useContext(ObserverContext)

  useEffect(() => {
    handleObserver(targets)
  }, [targets])
  return (
    <div ref={toTargets} className={`${styles.selectBox} ${animated.fadein}`}>
        <div className={styles.selectBoxWrap}>
            <p>絞り込み</p>
            <label class={styles.selectBoxItem} for="slct">
                <select id="slct" required="required">
                    <option value="" disabled="disabled" selected="selected">すべてのアイテム</option>
                    <option value="#">すべてのアイテム</option>
                    <option value="#">すべてのアイテム</option>
                </select>
            <FaAngleDown />
            </label>
        </div>
        <div className={styles.selectBoxWrap}>
            <p>並び順</p>
            <label class={styles.selectBoxItem} for="slct">
                <select id="slct" required="required">
                    <option value="" disabled="disabled" selected="selected">新着順</option>
                    <option value="#">新着順</option>
                    <option value="#">新着順</option>
                </select>
            <FaAngleDown />
            </label>
        </div>
    </div>
  )
}
export default SelectBox
