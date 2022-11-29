import React, { useEffect, useState, useContext } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "./mypage.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import CardItems from "../../components/Card/CardItems"
import Category from "../../components/Category"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider"
import { handleObserver } from "../../utils/IntersectionObserver"

const Index = ({ data }) => {
  const { toTargets, targets } = useContext(ObserverContext)

  useEffect(() => {
    handleObserver(targets)
  }, [targets])
  const [currentTab, setCurrentTab] = useState("1")
  const tabs = [
    {
      id: 1,
      tabTitle: "購入済NFT",
      title: "購入済NFT",
    },
    {
      id: 2,
      tabTitle: "出品中NFT",
      title: "出品中NFT",
    },
    {
      id: 3,
      tabTitle: "お気に入り",
      title: "お気に入り",
    },
    {
      id: 4,
      tabTitle: "取引履歴",
      title: "取引履歴",
    },
  ]
  const handleTabClick = e => {
    setCurrentTab(e.target.id)
  }
  return (
    <Layout>
      <div className={styles.mypage}>
        <div className={styles.mypageUser}>
          <div className={styles.mypageUserLogo}>
            <StaticImage
              src="../../images/avatar.png"
              alt="Username１２３４５"
            />
            <button className={styles.mypageUserLogoEdit}>
              <StaticImage src="../../images/edit.png" alt="edit" />
            </button>
          </div>
          <div className={styles.mypageUserContent}>
            <p className={styles.mypageUserName}>Username１２３４５</p>
            <div className={styles.mypageUserTxt}>
              <StaticImage src="../../images/ic.png" alt="0xc142" />
              <span>0xc142...11B0</span>
            </div>
          </div>
        </div>
        <div className={styles.mypageTabs}>
          <div
            ref={toTargets}
            className={`${styles.mypageTabsItem} ${animated.zoomIn}`}
          >
            {tabs.map((tab, i) => (
              <button
                key={i}
                id={tab.id}
                disabled={currentTab === `${tab.id}`}
                className={
                  currentTab === `${tab.id}` ? `${styles.isActive}` : ""
                }
                onClick={handleTabClick}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>
          <div className={styles.mypageTabsContent}>
            <div>
              {currentTab === '1' && (
                <div>
                  <CardItems data={data.allTopDataJson.edges} />
                </div>
              )}
              {currentTab === '2' && (
                <div>
                  <CardItems data={data.allTopDataJson.edges} />
                </div>
              )}
              {currentTab === '3' && (
                <div>
                  <CardItems data={data.allTopDataJson.edges} />
                </div>
              )}
              {currentTab === '4' && (
                <div className={styles.mypageTable}>
                  <div className={styles.mypageTableContent}>
                    <table>
                      <tbody>
                        <tr>
                          <th>日時</th>
                          <th>商品名</th>
                          <th>購入価格</th>
                          <th>入庫</th>
                          <th>出庫</th>
                          <th>ステータス</th>
                        </tr>
                        <tr>
                          <td className={styles.mypageTableContentDate}>
                            2022-10-10
                            <br />
                            09:39:40
                          </td>
                          <td>
                            <div className={styles.mypageTableContentImg}>
                              <span>
                                <StaticImage
                                  src="../../images/nft-02.jpg"
                                  alt="Chart"
                                />
                              </span>
                              ウイスキーNFT30年後...
                            </div>
                          </td>
                          <td>3,500円</td>
                          <td><Link to="/">uname2022</Link></td>
                          <td><Link to="/">gokuu887</Link></td>
                          <td><Link to="/">購入完了</Link></td>
                        </tr>
                        <tr>
                          <td className={styles.mypageTableContentDate}>
                            2022-10-10
                            <br />
                            09:39:40
                          </td>
                          <td>
                            <div className={styles.mypageTableContentImg}>
                              <span>
                                <StaticImage
                                  src="../../images/nft-02.jpg"
                                  alt="Chart"
                                />
                              </span>
                              ウイスキーNFT30年後...
                            </div>
                          </td>
                          <td>3,500円</td>
                          <td><Link to="/">uname2022</Link></td>
                          <td><Link to="/">gokuu887</Link></td>
                          <td><Link to="/">購入完了</Link></td>
                        </tr>
                        <tr>
                          <td className={styles.mypageTableContentDate}>
                            2022-10-10
                            <br />
                            09:39:40
                          </td>
                          <td>
                            <div className={styles.mypageTableContentImg}>
                              <span>
                                <StaticImage
                                  src="../../images/nft-02.jpg"
                                  alt="Chart"
                                />
                              </span>
                              ウイスキーNFT30年後...
                            </div>
                          </td>
                          <td>3,500円</td>
                          <td><Link to="/">uname2022</Link></td>
                          <td><Link to="/">gokuu887</Link></td>
                          <td><Link to="/">購入完了</Link></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Category />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query getCollection {
    allTopDataJson(limit: 8) {
      edges {
        node {
          id
          favourite
          myFavourite
          collection
          name
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`
export const Head = () => <Seo title="Mypage" />
export default Index
