import React, { useEffect, useState, useContext } from "react";
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "./mypage.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import CardItems from "../../components/Card/CardItems"
import Category from "../../components/Category"
import * as animated from "../../styles/animated.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider";
import { handleObserver } from '../../utils/IntersectionObserver'

const Index = ({data}) => {
    const { toTargets, targets } = useContext(ObserverContext);

    useEffect(() => {
        handleObserver(targets)
    }, [targets])
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: '購入済NFT',
            title: '購入済NFT',
        },
        {
            id: 2,
            tabTitle: '出品中NFT',
            title: '出品中NFT',
        },
        {
            id: 3,
            tabTitle: 'お気に入り',
            title: 'お気に入り',
        },
        {
            id: 4,
            tabTitle: '取引履歴',
            title: '取引履歴',
        }
    ];
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (
        <Layout>
            <div className={styles.mypage}>
                <div className={styles.mypageUser}>
                    <div className={styles.mypageUserLogo}>
                        <StaticImage src="../../images/avatar.png" alt="Username１２３４５" />
                        <button className={styles.mypageUserLogoEdit}><StaticImage src="../../images/edit.png" alt="edit" /></button>
                    </div>
                    <div className={styles.mypageUserContent}>
                        <p className={styles.mypageUserName}>Username１２３４５</p>
                        <div className={styles.mypageUserTxt}>
                            <StaticImage src="../../images/ic.png" alt="0xc142" /><span>0xc142...11B0</span>
                        </div>
                    </div>
                </div>
                <div className={styles.mypageTabs}>
                    <div ref={toTargets} className={`${styles.mypageTabsItem} ${animated.zoomIn}`}>
                        {tabs.map((tab, i) =>
                            <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} className={currentTab === `${tab.id}` ? `${styles.isActive}` : ''} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                        )}
                    </div>
                    <div className={styles.mypageTabsContent}>
                        {tabs.map((tab, i) =>
                            <div key={i}>
                                {currentTab === `${tab.id}` &&
                                    <div>
                                        <CardItems data={data.allTopDataJson.edges} />
                                    </div>
                                }
                            </div>
                        )}
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