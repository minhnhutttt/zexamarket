import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import Seo from "../../components/seo"
import * as styles from "./faq.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import Question from "../../components/faq/question"
const introduction = [
    {
        id: 1,
        question: 'NFTと䛿なんですか？',
        answer: <> NFT(Non-Fungible Token、非代替性トークン)と䛿、ブロックチェーンを基盤にして作成された代替不可能なデジ
        タルデータです。<br />
         1つ1つが固有䛾も䛾であるため、美術品や録音物、仮想現実䛾不動産やペットなど䛾デジタル資産䛾所有権を
        認証するために使用できます。
        </>,
    },
    {
        id: 2,
        question: 'NF㼀コレクションと䛿なんですか？',
        answer: 'NF㼀コレクション䛿、関連するNF㼀䛾ユニークなコレクションであり、関連するファイルを特定䛾フォルダーにグループ化する方法とよく似ています。',
    },
    {
        id: 3,
        question: 'ど䛾ネットワークで使用できますか？',
        answer: 'Diverメインネットをサポートしています。',
    },
    {
        id: 4,
        question: 'どのようなデータ形式をサポートしていますか？',
        answer: '画像、音楽、動画、3Dファイル(GLB)などに対応しています。',
    },
    {
        id: 5,
        question: 'ど䛾ようなウォレットがサポートされていますか？',
        answer: <>DIVER WALLETがサポートされています。
        DIVER WALLET䛾ダウンロード䛿<a href="#">こちら</a></>,
    },
]
const Index = () => {
  return (
    <Layout>
      <div className={styles.faq}>
        <div className={styles.faqTtl}>
            FAQ
        </div>
        <div className={styles.faqAnchor}>
            <Link to="#" className={styles.faqAnchorItem}>
                <div className={styles.faqAnchorItemImg}>
                    <StaticImage layout="fixed" src="../../images/faq-01.png" alt="" />
                </div>
                <div className={styles.faqAnchorItemTxt}>はじめに</div>
            </Link>
            <Link to="#" className={styles.faqAnchorItem}>
                <div className={styles.faqAnchorItemImg}>
                    <StaticImage layout="fixed" src="../../images/faq-02.png" alt="" />
                </div>
                <div className={styles.faqAnchorItemTxt}>購入</div>
            </Link>
            <Link to="#" className={styles.faqAnchorItem}>
                <div className={styles.faqAnchorItemImg}>
                    <StaticImage layout="fixed" src="../../images/faq-03.png" alt="" />
                </div>
                <div className={styles.faqAnchorItemTxt}>販売</div>
            </Link>
            <Link to="#" className={styles.faqAnchorItem}>
                <div className={styles.faqAnchorItemImg}>
                    <StaticImage layout="fixed" src="../../images/faq-04.png" alt="" />
                </div>
                <div className={styles.faqAnchorItemTxt}>その他</div>
            </Link>    
        </div>
        <div className={styles.faqContent}>
            <div className={styles.faqContentTtl}>はじめに</div>
            {introduction.map(item => <Question key={item.id} question={item.question} answer={item.answer} />)}
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Faq" />

export default Index
