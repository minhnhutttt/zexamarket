import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Header.module.scss"
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.headerLogo}>
        <StaticImage src="../../images/logo.png" alt="ZEXAMARKET" />
      </Link>
      <div className={styles.headerInner}>
        <ul className={styles.headerMenu}>
          <li>
            <Link to={'/'}>
              <StaticImage src="../../images/ic-user.png" alt="ZEXAMARKET" />
              <span>マイページ</span>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <span>マーケットプレイス</span>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <span>ストア</span>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <span>ゼクサマーケットとは？</span>
            </Link>
          </li>
        </ul>
        <div className={styles.headerSearch}>
          <span className={styles.headerSearchIcon}><FaSearch /></span>
          <input type="text" placeholder="商品名、コレクション名、ユーザー名で探す。" />
        </div>
      </div>
    </header>
  )
}

export default Header
