import React from "react";
import * as styles from "./Card.module.scss"
import CardItem from "./CardItem"

const CardItems = (props) => {
  return (
      <div className={styles.itemsWrap}>
        {
          props.data.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <CardItem
                  id={item.node.id}
                  img={item.node.image.childImageSharp.fluid}
                  logo={item.node.logo.childImageSharp.fluid}
                  name={item.node.name}
                  collection={item.node.collection}
                  price={item.node.price}
                  myFavourite={item.node.myFavourite}
                  favourite={item.node.favourite}
                />
              </div>
            )
          })
        }
      </div>
  )
}

export default CardItems