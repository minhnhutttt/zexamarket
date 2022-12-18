import React, { useState } from "react"
import * as styles from "./Backtop.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const Backtop = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
    <button type="button" className={styles.pageTop} onClick={scrollToTop}>
      <StaticImage src="../../images/pageTOP.png" alt="ZEXAMARKET" 
      style={{display: visible ? 'block' : 'none'}} />
      </button>
  )
}

export default Backtop
