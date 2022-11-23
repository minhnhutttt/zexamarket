import React, { useContext } from "react"
import * as styles from "./card.module.scss"
import CardItem from "./CardItem"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider";

const CardItems = (props) => {
  const { toTargets } = useContext(ObserverContext);
  return (
    <div ref={toTargets} className={`${styles.items} ${animated.fadein}`}>
      <div className={styles.itemsWrap}>
        {
          props.data.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <CardItem
                  id={item.node.id}
                  img={item.node.image.childImageSharp}
                  logo={item.node.logo?.childImageSharp}
                  name={item.node.name}
                  collection={item.node.collection}
                  price={item.node.price}
                  myFavourite={item.node.myFavourite}
                  favourite={item.node.favourite}
                  user={item.node.user}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CardItems