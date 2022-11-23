import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.scss"
import { FaSearch } from 'react-icons/fa';
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.headerLogo}>
        <StaticImage src="../../images/logo.png" alt="ZEXAMARKET" />
      </Link>
      <div className={styles.headerInner}>
        <ul className={styles.headerMenu}>
          <li>
            <Link to={'/mypage'}>
              <StaticImage src="../../images/ic-user.png" alt="ZEXAMARKET" />
              <span>マイページ</span>
            </Link>
          </li>
          <li>
            <Link to={'/collection'}>
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
        <div className={styles.header__toggle}>
          <div className={styles.searchSp}>
            <button type="button" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <FaSearch />
            </button>
            {isSearchOpen &&
              <div className={styles.headerSearch}>
                <span className={styles.headerSearchIcon}><FaSearch /></span>
                <input type="text" placeholder="商品名、コレクション名、ユーザー名で探す。" />
              </div>
            }
          </div>
          <button type="button" className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.hamburgerLines} >
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </button>
          {isOpen &&
            <div className={styles.headerMenuSp}>
              <button type="button" className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <div className={`${styles.hamburgerLines} ${styles.isActive}`} >
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                </div>
              </button>
              <ul>
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
            </div>
          }
        </div>
      </div>
    </header>
  )
}

export default Header
