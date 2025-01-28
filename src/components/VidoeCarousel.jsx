import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import VerticalPlayer from './verticalPlayer';
import ReactPlayer from 'react-player';
import "./VideoCarousel.css";
import RenderIcon from './RenderIcon';

export default function VidoeCarousel({ property }) {
    const [viewSidePlayer, setViewSidePlayer] = useState(false);
    const [initialVideo, setInitialVideo] = useState(0);
    const {
        webpage: { content:
            { playIcon,
                videoBehavior,
                playerSettings: { playerViewMode, playerPosition, opacity, showAutoScrollToNestVideo, showTransparentLayer },
                galleryLayout: { layout },
                general: { showTitle, title },
                videoContent: { videos, type } },
            style: { general: { alignment, titleColor, titleFontFamily, titleFontSize, titleFontWeight },
                video: vidStyle,
                playIcon: playIconStyle

            } }
    } = property || {};
    console.log("playIcon", playIcon);
    const showVideoTitle = false
    const playVideo = (video) => {
        setViewSidePlayer(true);
        setInitialVideo(videos.indexOf(video));
    }

    const playerStyles = `.dyn-shoppable-video-player > div > video {
  border-radius: 10px;
  object-fit: cover;
  width: ${vidStyle.width} !important;
  height: ${vidStyle.height} !important;
  border: 1px ${vidStyle.videoBorderType}; 
  border-radius: ${vidStyle.videoBorderRadius.top} ${vidStyle.videoBorderRadius.right} ${vidStyle.videoBorderRadius.bottom} ${vidStyle.videoBorderRadius.left};  
}`
    return (
        <div>
            <style>
                {playerStyles}
            </style>
            {
                showTitle && <h1 style={{
                    color: titleColor,
                    fontFamily: titleFontFamily,
                    fontSize: titleFontSize,
                    fontWeight: titleFontWeight,
                    width: "100%",
                    textAlign: alignment,
                }}>{title}</h1>
            }
            {/* <button style={{
                marginBlock: "10px",
            }} onClick={() => setViewSidePlayer(!viewSidePlayer)}>Toggle Side Player</button> */}
            <div >
                {
                    layout === "slider" &&
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="my-dayna-Swiper"
                    >
                        {
                            videos?.map((video) => (
                                <SwiperSlide
                                    style={{
                                        backgroundColor: "transparent",
                                    }}
                                    key={video.id}>
                                    <div
                                        className={`dyn-shoppable-video-player`}
                                        onClick={() => {
                                            if (playIcon?.showPlayIcon) return;
                                            playVideo(video);
                                        }}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                            position: "relative",
                                        }} >
                                        {
                                            showVideoTitle && <p
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: "15%",
                                                    color: "white",
                                                    backgroundColor: "rgba(0, 0, 0, 0.49)",
                                                    padding: "5px",
                                                    borderRadius: "5px",
                                                    zIndex: 999,
                                                }}
                                            >{video.title}</p>
                                        }
                                        {
                                            playIcon?.showPlayIcon && <button style={{
                                                zIndex: 99,
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                backgroundColor: "transparent",
                                                color: "black",
                                                borderRadius: "10px",
                                                border: "none",
                                                cursor: "pointer"
                                            }} onClick={(e) => {
                                                e.stopPropagation();
                                                playVideo(video);
                                            }} >
                                                {
                                                    playIcon?.uploadIcon?.iconType === "selected" ? <RenderIcon style={playIconStyle} id={playIcon?.uploadIcon?.selectedIcon} /> : null
                                                }
                                            </button>
                                        }
                                        <ReactPlayer
                                            loop
                                            muted
                                            playsinline
                                            width={vidStyle.width}
                                            height={vidStyle.height}
                                            playing={videoBehavior.showAutoPlay && !viewSidePlayer}
                                            style={{
                                                objectFit: "cover",
                                                borderRadius: "10px",
                                            }} url={video.url} alt={video.title} onClick={() => { }} />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                }

            </div>
            {viewSidePlayer && playerViewMode === "reels" && <VerticalPlayer
                playerSettings={{ playerViewMode, playerPosition, opacity, showAutoScrollToNestVideo, showTransparentLayer }}
                videoBehavior={videoBehavior}
                initialVideo={initialVideo}
                setViewSidePlayer={setViewSidePlayer} />}

        </div>
    )
}
