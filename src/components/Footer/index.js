import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerCol}>
          <Link to="/" className={styles.footerLogo}>
            <StaticImage src="../../images/logo-footer.png" alt="ZEXAMARKET" />
          </Link>
          <div className={styles.footerTxt}>
            過去、現在、未来<br />
            時をつむぐ<br />
            NFTマーケットプレイス<br />
            <span>ZEXAMARKET</span>
          </div>
        </div>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <Link to="/">マーケットプレイス</Link>
            </li>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">お問い合わせ</Link>
            </li>
            <li>
              <Link to="/">利用規約</Link>
            </li>
            <li>
              <Link to="/">プライバシーポリシー</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.footerSocical}>
          <Link to="/">
            <StaticImage src="../../images/ic-twitter.png" alt="" />
          </Link>
          <Link to="/">
            <StaticImage src="../../images/ic-telegram.png" alt="" />
          </Link>
          <Link to="/">
            <StaticImage src="../../images/ic-instagram.png" alt="" />
          </Link>
        </div>
      </div>
      
      <div className={styles.footerCopyright}>
          ©ZEXAMARKET. All rights reserved.
        </div>
    </div>
  )
}

export default Footer
