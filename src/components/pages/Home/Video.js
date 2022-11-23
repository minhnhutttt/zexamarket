import React from "react";
import * as styles from "./video.module.scss"
const Video = () => {
    return (
        <div className={styles.video}>
            <div className={styles.videoWrap}>
                <div className={styles.videoPlayer}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NNQLJcJEzv0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className={styles.videoContent}>
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