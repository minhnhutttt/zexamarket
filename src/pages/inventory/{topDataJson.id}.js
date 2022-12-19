import React, { useEffect, useContext, useState } from "react"
import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"
import * as styles from "./inventory.module.scss"
import Seo from "../../components/seo"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { FaListAlt } from "react-icons/fa"
import RelatedItems from "../../components/RelatedItems"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider"
import { handleObserver } from "../../utils/IntersectionObserver"
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import Modal from 'react-modal';
Exporting(Highcharts);
Modal.setAppElement('#___gatsby');

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px'
  },
};

const Single = ({ data }) => {
  const { toTargets, targets } = useContext(ObserverContext)

  useEffect(() => {
    handleObserver(targets)
  }, [targets])
  const { name, logo, image, content, tags, user } = data.topDataJson
  const pathImg = getImage(image)
  const pathLogo = getImage(logo)
  const pathUser = getImage(user.avatar)

  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        zoomType: 'xy'
      },
      title: {
        text: ''
      },
      xAxis: [{
        labels: {
          format: "{value:%b %e}"
        },
        type: "datetime",
        min: 1658504333000 // 2019-10-01T00.00.00.000Z
      }],
      yAxis: [{
        labels: {
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: '<b>Volume <br />(ETH)</b>',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      }, {
        title: {
          text: '<b>Average <br />price (ETH)</b>',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        labels: {
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        opposite: true
      }],
      legend: {
        enabled: false
      },
      tooltip: {
        useHTML: true,
        formatter: function () {
          return '<table><tr><td style="text-align: center; font-weight: bold">' + this.y + ' ETH</td></tr><tr><td style="text-align: center;">Avg price: ' + this.y + ' ETH</td></tr><tr><td style="text-align: center;">' +
            Highcharts.dateFormat('%b %e at %H:%m %a',
              new Date(this.x))
            + '</td></tr></table>'
        },
        style: {
          textAlign: 'center'
        },
        shared: true
      },
      series: [{
        name: 'Volume',
        type: 'column',
        yAxis: 1,
        color: '#E6E9F1',
        data: [[1661182733000, 0.2],
        [1663861133000, 0.3],
        [1669131533000, 0.5]],
      }, {
        name: 'Average',
        marker: {
          enabled: false
        },
        data: [
          [1661182733000, 0.2],
          [1663861133000, 0.3],
          [1669131533000, 0.5]],
      }],
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
    });
  }, [])

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const [isSell, setIsSell] = useState(true);

  return (
    <Layout>
      <div className={styles.single}>
        <div className={styles.singleWrap}>
          <div className={`${styles.singleFlex} ${styles.isStart}`}>
            <div
              ref={toTargets}
              className={`${styles.singleCol} ${animated.fadein}`}
            >
              <div className={styles.singleThumb}>
                <GatsbyImage image={pathImg} alt={name} />
              </div>
            </div>
            <div
              ref={toTargets}
              className={`${styles.singleCol} ${animated.fadein}`}
            >
              <div className={styles.singleArticle}>
                <div className={styles.singleArticleLogo}>
                  <GatsbyImage image={pathLogo} alt={name} />
                  <span>コレクション名が入ります</span>
                </div>
                <div className={styles.singleArticleContent}>
                  <div className={styles.singleArticleName}>{name}</div>
                  <p className={styles.singleArticleTxt}>{content}</p>
                  <div className={styles.singleArticleTag}>
                    {tags.map((tag, index) => (
                      <p key={index}>{tag}</p>
                    ))}
                  </div>
                  <div className={styles.singleArticleBtnWrap}>
                    <button type="button" onClick={()=> setModalOpen(true)} className={styles.singleArticleBtn}>出品する</button>
                    <Modal
                      isOpen={modalOpen}
                      onRequestClose={closeModal}
                      contentLabel="Modal"
                      style={modalStyles}
                    >
                      <div className={styles.singleModal}>
                        <button className={styles.singleModalClose} onClick={closeModal}>
                        <StaticImage src="../../images/close.png" alt="ZEXAMARKET" />
                        </button>
                        <div className={styles.singleModalWrap}>
                          <div className={styles.singleModalTtl}>
                              販売NFT情報
                            </div>
                          <div className={styles.singleModalHead}>
                            <div className={styles.singleModalHeadProduct}>
                                <div className={styles.singleModalHeadProductImg}>
                                  <GatsbyImage image={pathImg} alt={name} />
                                </div>
                                <div className={styles.singleModalHeadProductTxt}>
                                  信長NFT首将達 #0177
                                </div>
                              </div>
                              {!isSell && 
                                <div className={styles.singleModalHeadProductPrice}>
                                  <p>22.34 DIV</p>
                                  <p>3,800円</p>
                                </div>
                              }
                          </div>
                          {isSell ?
                          <div className={styles.singleModalContent}>
                            <div className={styles.singleModalContentPrice}>
                              <p className={styles.singleModalTxt}>販売価格</p>
                              <div>
                                <input type="text" placeholder="販売価格を入力してください。" />
                                <span>DIV</span>
                              </div>
                            </div>  
                            <div className={styles.singleModalContentHistory}>
                              <p className={styles.singleModalTxt}>ゼクサマーケットでの取引履歴</p>
                              <p className={styles.singleModalTxt2}>この商品は過去に、以下の価格で取引されました。</p>
                              <div className={styles.singleModalContentHistoryTable}>
                                  <div>
                                    <p>売却済</p>
                                    <p>234.57 DIV</p>
                                    <p>2022-12-12 13:14:48</p>
                                  </div>
                                  <div>
                                    <p>売却済</p>
                                    <p>234.57 DIV</p>
                                    <p>2022-12-12 13:14:48</p>
                                  </div>
                                  <div>
                                    <p>売却済</p>
                                    <p>234.57 DIV</p>
                                    <p>2022-12-12 13:14:48</p>
                                  </div>
                                  <div>
                                    <p>売却済</p>
                                    <p>234.57 DIV</p>
                                    <p>2022-12-12 13:14:48</p>
                                  </div>
                              </div>
                              <button type="button" onClick={()=> setIsSell(false)} className={styles.singleArticleBtn}>出品する</button>
                            </div>
                          </div>
                          : 
                          
                          <div className={styles.singleModalBuy}>
                              <p className={styles.singleModalTxt}>取引情報</p>
                              <div className={styles.singleModalBuyInfo}>
                                <p>数量</p>
                                <p>1</p>
                              </div>
                              <p className={styles.singleModalTxt}>ウォレットに移動</p>
                              <div className={styles.singleModalBuyInfo}>
                                <p>この購入をウォレットから承認するよう求められます。</p>
                              </div>
                          </div>
                          }
                        </div>
                      </div>
                    </Modal>
                  </div>
                  <div className={styles.singleArticleUser}>
                    <div className={styles.singleArticleUserAvatar}>
                      <GatsbyImage image={pathUser} alt={user.nickname} />
                    </div>
                    <div className={styles.singleArticleUserInfo}>
                      <p className={styles.singleArticleUserOwner}>所有者</p>
                      <p className={styles.singleArticleUserName}>
                        {user.nickname}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.singleFlex}>
            <div
              ref={toTargets}
              className={`${styles.singleCol} ${animated.fadein}`}
            >
              <div className={styles.singleBlock}>
                <div className={styles.singleHead}>
                  <FaListAlt />
                  <span>詳細</span>
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
            <div
              ref={toTargets}
              className={`${styles.singleCol} ${animated.fadein}`}
            >
              <div className={styles.singleBlock}>
                <div className={styles.singleHead}>
                  <FaListAlt />
                  <span>価格履歴</span>
                </div>
                <div className={styles.singleChart}>
                  <div id="container" className={styles.singleChartMain}></div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={toTargets}
            className={`${styles.singleTable} ${animated.fadein}`}
          >
            <div className={styles.singleHead}>
              <FaListAlt />
              <span>NFT取引履歴</span>
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
                    <td>
                      <div className={styles.singleTableContentImg}>
                        <span>
                          <StaticImage
                            src="../../images/nft-01.jpg"
                            alt="Chart"
                          />
                        </span>
                        ウイスキーNFT30年後...
                      </div>
                    </td>
                    <td>30DIV</td>
                    <td>a-owner</td>
                    <td>a-owner</td>
                    <td className={styles.singleTableContentDate}>
                      2022-10-10
                      <br />
                      09:39:40
                    </td>
                  </tr>
                  <tr>
                    <td>転送</td>
                    <td>
                      <div className={styles.singleTableContentImg}>
                        <span>
                          <StaticImage
                            src="../../images/nft-01.jpg"
                            alt="Chart"
                          />
                        </span>
                        ウイスキーNFT30年後...
                      </div>
                    </td>
                    <td>30DIV</td>
                    <td>a-owner</td>
                    <td>a-owner</td>
                    <td className={styles.singleTableContentDate}>
                      2022-10-10
                      <br />
                      09:39:40
                    </td>
                  </tr>
                  <tr>
                    <td>販売</td>
                    <td>
                      <div className={styles.singleTableContentImg}>
                        <span>
                          <StaticImage
                            src="../../images/nft-01.jpg"
                            alt="Chart"
                          />
                        </span>
                        ウイスキーNFT30年後...
                      </div>
                    </td>
                    <td>30DIV</td>
                    <td>a-owner</td>
                    <td>a-owner</td>
                    <td className={styles.singleTableContentDate}>
                      2022-10-10
                      <br />
                      09:39:40
                    </td>
                  </tr>
                  <tr>
                    <td>販売</td>
                    <td>
                      <div className={styles.singleTableContentImg}>
                        <span>
                          <StaticImage
                            src="../../images/nft-01.jpg"
                            alt="Chart"
                          />
                        </span>
                        ウイスキーNFT30年後...
                      </div>
                    </td>
                    <td>30DIV</td>
                    <td>a-owner</td>
                    <td>a-owner</td>
                    <td className={styles.singleTableContentDate}>
                      2022-10-10
                      <br />
                      09:39:40
                    </td>
                  </tr>
                  <tr>
                    <td>転送</td>
                    <td>
                      <div className={styles.singleTableContentImg}>
                        <span>
                          <StaticImage
                            src="../../images/nft-01.jpg"
                            alt="Chart"
                          />
                        </span>
                        ウイスキーNFT30年後...
                      </div>
                    </td>
                    <td>30DIV</td>
                    <td>a-owner</td>
                    <td>a-owner</td>
                    <td className={styles.singleTableContentDate}>
                      2022-10-10
                      <br />
                      09:39:40
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <RelatedItems />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleNFT($id: String) {
    topDataJson(id: { eq: $id }) {
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
