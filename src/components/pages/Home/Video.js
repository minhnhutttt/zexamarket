import React, { useContext } from "react";
import * as styles from "./video.module.scss"
import * as animated from "../../../styles/animated.module.scss"
import { ObserverContext } from "../../../provider/IntersectionObserverProvider";
const Video = () => {
    const { toTargets } = useContext(ObserverContext);
    return (
        <div className={styles.video}>
            <div className={styles.videoWrap}>
                <div ref={toTargets} className={`${styles.videoPlayer} ${animated.slideRight}`}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NNQLJcJEzv0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div ref={toTargets} className={`${styles.videoContent} ${animated.slideLeft}`}>
                    <h3 className={styles.videoTtl}>
                        ゼクサマーケットとは
                    </h3>
                    <p className={styles.videoTxt}>
                        texttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttext
                        texttext
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video