import * as React from "react"
import * as styles from "./Mainvisual.module.scss"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CardItem from "../Card/CardItem"

const Mainvisual = () => {
    const data = useStaticQuery(graphql`
        query TripQuery {
            allSliderDataJson {
            edges {
                node {
                id
                name
                image {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                logo {
                    id
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                collection
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
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Pagination]}
            pagination={{
                el: `.${styles.pagination}`,
                clickable: true,
            }}
            className={styles.mvSliderContent}
        >
            {
                data.allSliderDataJson.edges.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <CardItem 
                                img={item.node.image.childImageSharp.fluid} 
                                logo={item.node.logo.childImageSharp.fluid}
                                name={item.node.name}
                                collection={item.node.collection}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        <div className={styles.pagination}></div>
        </div>
    </div>
  )
}

export default Mainvisual
