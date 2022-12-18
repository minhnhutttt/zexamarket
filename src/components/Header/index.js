import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Header.module.scss"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.headerLogo}>
        <StaticImage src="../../images/logo.png" alt="ZEXAMARKET" />
      </Link>
      <div className={styles.headerInner}>
        <div className={styles.headerSearch}>
          <span className={styles.headerSearchIcon}>
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="商品名、コレクション名、ユーザー名で探す。"
          />
        </div>
        <ul className={styles.headerMenu}>
          <li>
            <Link to={"/mypage"}>
              <span>マーケットプレイス</span>
            </Link>
          </li>
          <li>
            <Link to={"/collection"}>
              <span>ストア</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>ABOUT</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>FAQ</span>
            </Link>
          </li>
          <li>
            <Link to={"/"} className={styles.isUser}>
              <StaticImage src="../../images/ic-user.png" alt="ZEXAMARKET" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <StaticImage src="../../images/ic-wallet.png" alt="ZEXAMARKET" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <StaticImage src="../../images/ic-shopping-cart.png" alt="ZEXAMARKET" />
            </Link>
          </li>
        </ul>
        <div className={styles.header__toggle}>
          <div className={styles.searchSp}>
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FaSearch />
            </button>
            {isSearchOpen && (
              <div className={styles.headerSearch}>
                <span className={styles.headerSearchIcon}>
                  <FaSearch />
                </span>
                <input
                  type="text"
                  placeholder="商品名、コレクション名、ユーザー名で探す。"
                />
              </div>
            )}
          </div>
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={styles.hamburgerLines}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </button>
          {isOpen && (
            <div className={styles.headerMenuSp}>
              <button
                type="button"
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className={`${styles.hamburgerLines} ${styles.isActive}`}>
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                </div>
              </button>
              <ul>
                <li>
                  <Link to={"/mypage"}>
                    <span>マーケットプレイス</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/collection"}>
                    <span>ストア</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <span>ABOUT</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <span>FAQ</span>
                  </Link>
                </li>
                <li className={styles.headerMenuSpLink}>
                  <Link to={"/"} className={styles.isUser}>
                    <StaticImage src="../../images/ic-user.png" alt="ZEXAMARKET" />
                  </Link>
                  <Link to={"/"}>
                    <StaticImage src="../../images/ic-wallet.png" alt="ZEXAMARKET" />
                  </Link>
                  <Link to={"/"}>
                    <StaticImage src="../../images/ic-shopping-cart.png" alt="ZEXAMARKET" />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
