import React, { useEffect, useContext } from "react";
import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"
import * as styles from "./inventory.module.scss"
import Seo from "../../components/seo"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import ButtonLink from "../../components/Button"
import { FaListAlt } from 'react-icons/fa';
import RelatedItems from "../../components/RelatedItems"
import Category from "../../components/Category"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider";
import { handleObserver } from '../../utils/IntersectionObserver'
const Single = ({ data }) => {
    const { toTargets, targets } = useContext(ObserverContext);

    useEffect(() => {
        handleObserver(targets)
    }, [targets])
    const { name, logo, image, content, tags, user } = data.topDataJson;
    const pathImg = getImage(image)
    const pathLogo = getImage(logo)
    const pathUser = getImage(user.avatar)
    return (
        <Layout>
            <div className={styles.single}>
                <div className={styles.singleWrap}>
                    <div className={`${styles.singleFlex} ${styles.isStart}`}>
                        <div ref={toTargets} className={`${styles.singleCol} ${animated.fadein}`}>
                            <div className={styles.singleThumb}>
                                <GatsbyImage image={pathImg} alt={name} />
                            </div>
                        </div>
                        <div ref={toTargets} className={`${styles.singleCol} ${animated.fadein}`}>
                            <div className={styles.singleArticle}>
                                <div className={styles.singleArticleLogo}>
                                    <GatsbyImage image={pathLogo} alt={name} />
                                    <span>コレクション名が入ります</span>
                                </div>
                                <div className={styles.singleArticleContent}>
                                    <div className={styles.singleArticleName}>
                                        {name}
                                    </div>
                                    <p className={styles.singleArticleTxt}>
                                        {content}
                                    </p>
                                    <div className={styles.singleArticleTag}>
                                        {tags.map((tag, index) => (
                                            <p key={index}>{tag}</p>
                                        ))}
                                    </div>
                                    <div className={styles.singleArticleBtn}>
                                        <ButtonLink to="/">出品する</ButtonLink>
                                    </div>
                                    <div className={styles.singleArticleUser}>
                                        <div className={styles.singleArticleUserAvatar}>
                                            <GatsbyImage image={pathUser} alt={user.nickname} />
                                        </div>
                                        <div className={styles.singleArticleUserInfo}>
                                            <p className={styles.singleArticleUserOwner}>所有者</p>
                                            <p className={styles.singleArticleUserName}>{user.nickname}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.singleFlex}>
                        <div ref={toTargets} className={`${styles.singleCol} ${animated.fadein}`}>
                            <div className={styles.singleBlock}>
                                <div className={styles.singleHead}>
                                    <FaListAlt /><span>詳細</span>
                                </div>
                                <div className={styles.singleList}>
                                    <div>
                                        <p>コントラクトアドレス</p>
                                        <p>
                                            <Link to="/">0xc142...11B0</Link>
                                        </p>
                                    </div>
                                    <div>
                                        <p>トークンID</p>
                                        <p>
                                            <Link to="/">0</Link>
                                        </p>
                                    </div>
                                    <div>
                                        <p>トークン標準</p>
                                        <p>DIR-1155</p>
                                    </div>
                                    <div>
                                        <p>ブロックチェーン</p>
                                        <p>DIVER</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={toTargets} className={`${styles.singleCol} ${animated.fadein}`}>
                            <div className={styles.singleBlock}>
                                <div className={styles.singleHead}>
                                    <FaListAlt /><span>価格履歴</span>
                                </div>
                                <div className={styles.singleChart}>
                                    <StaticImage src="../../images/chart.png" alt="Chart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={toTargets} className={`${styles.singleTable} ${animated.fadein}`}>
                        <div className={styles.singleHead}>
                            <FaListAlt /><span>NFT取引履歴</span>
                        </div>
                        <div className={styles.singleTableContent}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>STATUS</th>
                                        <th>商品</th>
                                        <th>価格</th>
                                        <th>入庫</th>
                                        <th>出庫</th>
                                        <th>日時</th>
                                    </tr>
                                    <tr>
                                        <td>購入完了</td>
                                        <td><div className={styles.singleTableContentImg}><span><StaticImage src="../../images/nft-01.jpg" alt="Chart" /></span>ウイスキーNFT30年後...</div></td>
                                        <td>30DIV</td>
                                        <td>a-owner</td>
                                        <td>a-owner</td>
                                        <td className={styles.singleTableContentDate}>2022-10-10<br />09:39:40</td>
                                    </tr>
                                    <tr>
                                        <td>転送</td>
                                        <td><div className={styles.singleTableContentImg}><span><StaticImage src="../../images/nft-01.jpg" alt="Chart" /></span>ウイスキーNFT30年後...</div></td>
                                        <td>30DIV</td>
                                        <td>a-owner</td>
                                        <td>a-owner</td>
                                        <td className={styles.singleTableContentDate}>2022-10-10<br />09:39:40</td>
                                    </tr>
                                    <tr>
                                        <td>販売</td>
                                        <td><div className={styles.singleTableContentImg}><span><StaticImage src="../../images/nft-01.jpg" alt="Chart" /></span>ウイスキーNFT30年後...</div></td>
                                        <td>30DIV</td>
                                        <td>a-owner</td>
                                        <td>a-owner</td>
                                        <td className={styles.singleTableContentDate}>2022-10-10<br />09:39:40</td>
                                    </tr>
                                    <tr>
                                        <td>販売</td>
                                        <td><div className={styles.singleTableContentImg}><span><StaticImage src="../../images/nft-01.jpg" alt="Chart" /></span>ウイスキーNFT30年後...</div></td>
                                        <td>30DIV</td>
                                        <td>a-owner</td>
                                        <td>a-owner</td>
                                        <td className={styles.singleTableContentDate}>2022-10-10<br />09:39:40</td>
                                    </tr>
                                    <tr>
                                        <td>転送</td>
                                        <td><div className={styles.singleTableContentImg}><span><StaticImage src="../../images/nft-01.jpg" alt="Chart" /></span>ウイスキーNFT30年後...</div></td>
                                        <td>30DIV</td>
                                        <td>a-owner</td>
                                        <td>a-owner</td>
                                        <td className={styles.singleTableContentDate}>2022-10-10<br />09:39:40</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <RelatedItems />
                <Category />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query getSingleNFT($id: String) {
        topDataJson(id: {eq: $id}) {
            id
            name
            content
            tags
            image {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
            }
            logo {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
            }
            user {
            avatar {
                childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
                }
            }
            nickname
            }
        }
}
`

export const Head = () => <Seo title="Home" />

export default Single
