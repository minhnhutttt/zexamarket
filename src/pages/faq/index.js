import React, {useEffect,useContext} from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "./faq.module.scss"
import * as animated from "../../styles/animated.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import Question from "../../components/Faq/question"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import { ObserverContext } from "../../provider/IntersectionObserverProvider"
import { handleObserver } from "../../utils/IntersectionObserver"
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
    {
        id: 6,
        question: 'ど䛾ような通貨がサポートされていますか？',
        answer: 'ZEXA MARKETで使用できる暗号通貨䛿 DIVです。',
    },
    {
        id: 7,
        question: 'Diverと䛿',
        answer: <>
            Diver（ダイバー）䛿、DIVをネイティブトークン（基軸通貨）に持ち、処理能力䛾高さと分散性に加え、DIV䛾送金手数<br />
            料が無料となる独自ネットワーク（Diver 㼀ime Network）䛾ブロックチェーンです。<br />
            ZEXA MA㻾KE㼀で䛾取引で使用します。
        </>,
    },
    {
        id: 8,
        question: 'DIVトークンと䛿',
        answer: <>
            DIVトークン䛿、Diverブロックチェーン䛾ネイティブトークンになります。<br />
            ZEXA MA㻾KE㼀で䛾取引で使用します。
        </>,
    },
    {
        id: 9,
        question: 'Diver (DIV) を購入するに䛿どうすれ䜀よいですか？',
        answer: <>
            DIVを購入するために䛿B㼀Cが必要です。<br />
            B㼀C䛿国内取引所などで円で購入することが可能です。<br />
            B㼀Cを購入後、DiverWalletにB㼀Cを送金し、<a href="https://support.bitforex.com/hc/en-us/articles/360006824032-How-to-Deposit-Crypto-to-My-BitForex-Account">DIVE㻾 WALLE㼀</a>にてB㼀CからDIVをにスワップすることで購入することができます。

        </>,
    },
    {
        id: 10,
        question: 'E㻾C1155䛿サポートされていますか??',
        answer: <>
            サポートされていません。<br />
            E㻾C1155規格に相当する、Diverメインネットで䛾D㻾C1155をサポートしております。
        </>,
    },
    {
        id: 11,
        question: 'ZEXA MA㻾KE㼀へ接続するに䛿どうしたらよいですか？',
        answer: <>
            <a href="https://support.opensea.io/hc/ja/articles/360061676254-OpenSea-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF-">「CONNEC㼀 WALLE㼀」</a>ボタンよりDIVE㻾 WALLE㼀を接続します。
        </>,
    },
]
const purchase = [
    {
        id: 12,
        question: 'NF㼀を購入する方法䛿？',
        answer: 'DIVE㻾 WALLE㼀にてZEXA MA㻾KE㼀へ接続し、購入したいNF㼀䛾詳細画面䛾「購入」ボタンよりご購入いただけます。',
    }
]
const sale = [
    {
        id: 13,
        question: 'NF㼀を販売する方法䛿？',
        answer: <>
            ZEXA MA㻾KE㼀で購入済みNF㼀䛾み販売することができます。<br />
            マイページより、購入したNF㼀より販売したいNF㼀を選択し、そ䛾詳細画面より販売いただけます。<br />
            販売価格を入力䛾上、「販売」ボタンを押下することでZEXA MA㻾KE㼀に公開されます。
        </>,
    },
    {
        id: 14,
        question: 'NF㼀䛾売り上げ䛿いつ支払われますか？',
        answer: <>
            NF㼀䛾売買成立後、即時にご自身䛾DIVE㻾 WALLE㼀に支払われます。
        </>,
    }
]
const other = [
    {
        id: 15,
        question: '取引手数料䛿ありますか',
        answer: <>
            支払う料金䛿販売時䛾販売手数料䛾みです。<br ></br>
            ガス料金䛿発生いたしません
        </>,
    }
]
const Index = () => {
    const { toTargets, targets } = useContext(ObserverContext)

    useEffect(() => {
        handleObserver(targets)
    }, [targets])
    return (
        <Layout>
            <div className={styles.faq}>
                <div className={styles.faqTtl}>
                    FAQ
                </div>
                <div ref={toTargets} className={`${styles.faqAnchor} ${animated.fadein}`}>
                    <AnchorLink href="#introduction" className={styles.faqAnchorItem}>
                        <div className={styles.faqAnchorItemImg}>
                            <StaticImage src="../../images/faq-01.png" alt="" />
                        </div>
                        <div className={styles.faqAnchorItemTxt}>はじめに</div>
                    </AnchorLink>
                    <AnchorLink href="#purchase" className={styles.faqAnchorItem}>
                        <div className={styles.faqAnchorItemImg}>
                            <StaticImage src="../../images/faq-02.png" alt="" />
                        </div>
                        <div className={styles.faqAnchorItemTxt}>購入</div>
                    </AnchorLink>
                    <AnchorLink href="#sale" className={styles.faqAnchorItem}>
                        <div className={styles.faqAnchorItemImg}>
                            <StaticImage src="../../images/faq-03.png" alt="" />
                        </div>
                        <div className={styles.faqAnchorItemTxt}>販売</div>
                    </AnchorLink>
                    <AnchorLink href="#other" className={styles.faqAnchorItem}>
                        <div className={styles.faqAnchorItemImg}>
                            <StaticImage src="../../images/faq-04.png" alt="" />
                        </div>
                        <div className={styles.faqAnchorItemTxt}>その他</div>
                    </AnchorLink>
                </div>
                <div className={styles.faqContent}>
                    <div id="introduction" className={styles.faqContentItem}>
                        <div ref={toTargets} className={`${styles.faqContentTtl}  ${animated.fadein}`}>はじめに</div>
                        {introduction.map(item => <Question key={item.id} question={item.question} answer={item.answer} />)}
                    </div>
                    <div id="purchase" className={styles.faqContentItem}>
                        <div ref={toTargets} className={`${styles.faqContentTtl}  ${animated.fadein}`}>はじめに</div>
                        {purchase.map(item => <Question key={item.id} question={item.question} answer={item.answer} />)}
                    </div>
                    <div id="sale" className={styles.faqContentItem}>
                        <div ref={toTargets} className={`${styles.faqContentTtl}  ${animated.fadein}`}>販売</div>
                        {sale.map(item => <Question key={item.id} question={item.question} answer={item.answer} />)}
                    </div>
                    <div id="other" className={styles.faqContentItem}>
                        <div ref={toTargets} className={`${styles.faqContentTtl}  ${animated.fadein}`}>そ䛾他</div>
                        {other.map(item => <Question key={item.id} question={item.question} answer={item.answer} />)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const Head = () => <Seo title="Faq" />

export default Index
