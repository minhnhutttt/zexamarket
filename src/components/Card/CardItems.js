import React from "react"
import * as styles from "./Card.module.scss"
import CardItem from "./CardItem"
const CardItems = props => {
  return (
    <div className={styles.items}>
      <div className={styles.itemsWrap}>
        {props.data.map((item, index) => {
          return (
            <div className={styles.item} key={index}>
              <CardItem
                id={item.node.id}
                img={item.node.image.childImageSharp}
                logo={item.node.logo?.childImageSharp}
                name={item.node.name}
                collection={item.node.collection}
                price={item.node.price}
                div={item.node.div}
                myFavourite={item.node.myFavourite}
                favourite={item.node.favourite}
                user={item.node.user}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardItems
