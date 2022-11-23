import * as React from "react"
import * as styles from "./mainvisual.module.scss"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CardItem from "../Card/CardItem"

const Mainvisual = () => {
    const data = useStaticQuery(graphql`
        query MyQuery1 {
            allTopDataJson(limit: 4) {
            edges {
                node {
                id
                collection
                name
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
                }
            }
            }
        }
    `)
    return (
        <div className={styles.mv}>
            <div className={styles.mvContent}>
                <h4 className={styles.mvContentTxt}>
                    過去、現在、未来 <br />
                    時をつむぐ <br />
                    NFTマーケットプレイス <br />
                    <span>ZEXAMARKET</span>
                </h4>
                <Link to={'/'} className={styles.mvContentBtn}>
                    マーケットプレイス
                </Link>
            </div>
            <div className={styles.mvSlider}>
                <div className={styles.mvSliderContent}
                >
                    <Swiper
                        loop={true}
                        modules={[Pagination]}
                        pagination={{
                            el: `.${styles.pagination}`,
                            clickable: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {
                            data.allTopDataJson.edges.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <CardItem
                                            id={item.node.id}
                                            img={item.node.image.childImageSharp}
                                            logo={item.node.logo.childImageSharp}
                                            name={item.node.name}
                                            collection={item.node.collection}
                                            isSlider
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div className={styles.pagination}></div>
                </div>
            </div>
        </div>
    )
}

export default Mainvisual
