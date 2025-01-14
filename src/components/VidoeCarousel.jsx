import React, { useState } from 'react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { videos } from '../data/video';
import VerticalPlayer from './verticalPlayer';

export default function VidoeCarousel() {
    const [viewSidePlayer, setViewSidePlayer] = useState(false);
    const [initialVideo, setInitialVideo] = useState(0);
    return (
        <div>
            <h1>Video Carousel</h1>
            <button onClick={() => setViewSidePlayer(!viewSidePlayer)}>Toggle Side Player</button>
            <div >
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="my-dayna-Swiper"
                >
                    {
                        videos.map((video) => (
                            <SwiperSlide
                                style={{
                                    width: "300px"
                                }} key={video.id}>
                                <div style={{
                                    position: "relative",
                                }} >
                                    <button style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        padding: "10px 20px",
                                        backgroundColor: "lightGray",
                                        color: "black",
                                        borderRadius: "10px",
                                        border: "none",
                                        cursor: "pointer"
                                    }} onClick={() => {
                                        setViewSidePlayer(true);
                                        setInitialVideo(videos.indexOf(video));
                                    }} >
                                        Play
                                    </button>
                                    <img style={{
                                        borderRadius: "10px",
                                        width: "300px"
                                    }} src={`https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`} alt={video.title} onClick={() => { }} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            {viewSidePlayer && <VerticalPlayer initialVideo={initialVideo} setViewSidePlayer={setViewSidePlayer} />}
        </div>
    )
}
