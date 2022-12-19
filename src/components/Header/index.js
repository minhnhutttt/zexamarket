import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Header.module.scss"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import Modal from 'react-modal';
Modal.setAppElement('#___gatsby');
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    border: '0'
  },
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
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
            <Link to={"/faq"}>
              <span>FAQ</span>
            </Link>
          </li>
          <li>
            <Link to={"/account"} className={styles.isUser}>
              <StaticImage src="../../images/ic-user.png" alt="ZEXAMARKET" />
            </Link>
          </li>
          <li>
            <button to={"/"} onClick={()=> setModalOpen(true)}>
              <StaticImage src="../../images/ic-wallet.png" alt="ZEXAMARKET" />
            </button>
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
                  <Link to={"/faq"}>
                    <span>FAQ</span>
                  </Link>
                </li>
                <li className={styles.headerMenuSpLink}>
                  <Link to={"/account"} className={styles.isUser}>
                    <StaticImage src="../../images/ic-user.png" alt="ZEXAMARKET" />
                  </Link>
                  <button to={"/"} onClick={()=> setModalOpen(true)}>
                    <StaticImage src="../../images/ic-wallet.png" alt="ZEXAMARKET" />
                  </button>
                  <Link to={"/"}>
                    <StaticImage src="../../images/ic-shopping-cart.png" alt="ZEXAMARKET" />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={modalStyles}
      >
        <div className={styles.wallet}>
          <div className={styles.walletModal}>
            <div className={styles.walletModalLogo}>
              <StaticImage src="../../images/w-logo.png" alt="W" />
              </div>
              <div className={styles.walletModalTtl}>
                ウォレットを接続します。
              </div>
              <div className={styles.walletModalTxt}>
              あなたが持ってるウォレットに接続します。<br />
              ただし、持っていない場合はウ<a href="#">ォレット</a>を作成することができます。
              </div>
              <div className={styles.walletModalBtn}>
                <Link to="/" className={styles.walletModalBtn01}>
                  ウォレットを接続する
                </Link>
                <Link to="/" className={styles.walletModalBtn02}>
                  DIVER WALLET ダウンロード
                </Link>
              </div>
          </div>
        </div>
      </Modal>
    </header>
  )
}

export default Header
