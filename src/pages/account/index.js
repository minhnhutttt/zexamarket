import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./account.module.scss"
import Input from "../../components/Form/input"
import Textarea from "../../components/Form/textarea"
import InputLink from "../../components/Form/inputLink"
import InputClipboard from "../../components/Form/inputClipboard"
const Index = () => {
  return (
    <Layout>
      <div className={styles.account}>
        <div className={styles.accountTtl}>
            マイページ編集
        </div>
        <div className={styles.accountAvatar}>
            <div>
                <div className={styles.accountAvatarImg}>
                    <StaticImage src="../../images/avatar2.png" alt="" />
                </div>
                <button type="button" className={styles.accountAvatarBtn}>
                    <StaticImage src="../../images/edit-b.png" alt="" />
                </button>
            </div>
        </div>
        <div className={styles.accountForm}>
            <div className={styles.accountFormBlock}>
                <Input label="ユーザー名" name="name1" required placeholder="ユーザー名を入力してください。" hasCount />
            </div>
            <div className={styles.accountFormBlock}>
                <Textarea label="自己紹介" name="name2" required placeholder="あなたのプロフィールを入力してください。" hasCount />
            </div>
            <div className={styles.accountFormBlock}>
                <Input label="メールアドレス" name="name3" required placeholder="メールアドレスを入力してください。"  />
            </div>
            <div className={styles.accountFormBlock}>
                <InputLink label="リンク" name="name4" required placeholder="abcd.zexamarket"  />
            </div>
            <div className={styles.accountFormBlock}>
                <InputClipboard label="ウォレットアドレス" name="name5" value="0xc142f69a849e3fa2d000f5f12d273355984b111b0"  />
            </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Account" />

export default Index
