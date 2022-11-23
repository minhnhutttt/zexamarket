import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "./mypage.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import CardItems from "../../components/Card/CardItems"
import Category from "../../components/Category/Category"

const Index = ({data}) => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: '購入済NFT',
            title: '購入済NFT',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: '出品中NFT',
            title: '出品中NFT',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: 'お気に入り',
            title: 'お気に入り',
            content: 'Contenido de tab 3.'
        },
        {
            id: 4,
            tabTitle: '取引履歴',
            title: '取引履歴',
            content: 'Contenido de tab 4.'
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
                        <p className={styles.mypageUserTxt}>
                            <StaticImage src="../../images/ic.png" alt="0xc142" /><span>0xc142...11B0</span>
                        </p>
                    </div>
                </div>
                <div className={styles.mypageTabs}>
                    <div className={styles.mypageTabsItem}>
                        {tabs.map((tab, i) =>
                            <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} className={currentTab === `${tab.id}` && `${styles.isActive}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
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