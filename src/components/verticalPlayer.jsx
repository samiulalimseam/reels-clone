import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { videos } from "../data/video"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import ReactPlayer from 'react-player';

export default function VerticalPlayer({ initialVideo, setViewSidePlayer }) {
    console.log('- 💎 file: verticalPlayer.jsx:16 💎 VerticalPlayer 💎 initialVideo:', initialVideo)
    const [activeSlide, setActiveSlide] = useState(initialVideo);
    const [muted, setMuted] = useState(true);
    const [paused, setPaused] = useState(false);
    const swiperRef = useRef(null);



    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index); // Programmatically go to the slide
        }
    };

    useEffect(() => {
        goToSlide(initialVideo);
    }, [initialVideo])

    const muteButtonStyle = {
        cursor: 'pointer',
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        fontSize: '15px',
    }
    return (
        <div style={{
            zIndex: 99,
            position: 'fixed',
            bottom: 20,
            right: 20,
            width: '300px',
            height: '600px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            backgroundColor: 'transparent',
            borderRadius: '10px',
        }}>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    console.log(swiper);
                    setActiveSlide(swiper.activeIndex);
                }
                }
                style={{
                    borderRadius: '10px',
                }}
                keyboard={{
                    enabled: true,
                }}
                direction={'vertical'}
                centeredSlides={true}
                mousewheel={true}
                modules={[Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <button style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 999,
                    backgroundColor: 'transparent',
                    padding: '5px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                }} onClick={() => {
                    setViewSidePlayer(false)
                    setActiveSlide(null)
                }} >
                    close
                </button>

                <div style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 20,
                    zIndex: 999,
                    backgroundColor: 'transparent',
                    padding: '5px',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'start',
                    gap: '10px',
                }}>
                    {
                        muted ? <button
                            style={muteButtonStyle}
                            onClick={() => setMuted(false)}>🔊</button> : <button
                                style={muteButtonStyle}
                                onClick={() => setMuted(true)}>🔇</button>
                    }
                    {
                        paused ? <button
                            style={muteButtonStyle}
                            onClick={() => setPaused(false)}>▶️</button> : <button
                                style={muteButtonStyle}
                                onClick={() => setPaused(true)}>⏸️</button>
                    }
                </div>
                {
                    videos.map((video, index) => {
                        console.log('💎 file: verticalPlayer.jsx:76 💎 VerticalPlayer 💎 index:', index)
                        return (
                            <SwiperSlide
                                className='dynamatic-swiper-slide'
                                style={{
                                    width: "300px",
                                    height : "600px",
                                    backgroundColor: 'transparent',
                                }}
                                key={video.id}>
                                <ReactPlayer
                                    playIcon={<div>Play</div>}
                                    fallback={<div>
                                        loading...
                                    </div>}
                                    playsinline
                                    style={{
                                        width: '300px',
                                        height : "600px",
                                        objectFit: 'cover',
                                        scale: 1.5,
                                        borderRadius: '10px',
                                        backgroundColor: 'transparent',
                                    }}
                                    playing={activeSlide === index && !paused}
                                    loop
                                    muted={!muted}
                                    height={"600px"} width={"300px"} key={video.id} url={video.url} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    );
}
