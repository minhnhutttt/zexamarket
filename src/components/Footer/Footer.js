import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrap}>
                <Link to="/" className={styles.footerLogo}>
                    <StaticImage src="../../images/logo-footer.png" alt="ZEXAMARKET" />
                </Link>
                <nav className={styles.footerNav}>
                    <ul>
                        <li>
                            <Link to="/">
                                マーケットプレイス
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                ゼクサマーケットとは？
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                About
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/">
                                お問い合わせ
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Privacy Policy
                            </Link>
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
                <div className={styles.footerCopyright}>©ZEXAMARKET. All rights reserved.</div>
            </div>    
        </div>
    )
}

export default Footer