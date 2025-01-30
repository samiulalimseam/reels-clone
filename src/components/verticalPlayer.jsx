import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import ReactPlayer from 'react-player';
import RenderIcon from './RenderIcon';
import ProductCard from './ProductCard';
const testProducts = [
    {
        id: 1,
        name: 'Apple Airpods Max',
        price: 549,
        compareAtPrice: 599,
        imageUrl: 'https://adminapi.applegadgetsbd.com/storage/media/large/2299-79250.jpg',
    },
    {
        id: 2,
        name: 'Apple Airpods Pro',
        price: 249,
        compareAtPrice: 299,
        imageUrl: 'https://adminapi.applegadgetsbd.com/storage/media/large/AirPods-Pro-(2nd-generation)-c-1370.jpg',
    }

]
export default function VerticalPlayer({ initialVideo, setViewSidePlayer, videos }) {
    const [activeSlide, setActiveSlide] = useState(initialVideo);
    const [upsellProducts, setUpsellProducts] = useState([]);
    const [showUpsellContainer, setShowUpsellContainer] = useState(false);
    const [displayType, setDisplayType] = useState('flex');
    console.log("upsellProducts", upsellProducts)
    const [muted, setMuted] = useState(true);
    const [paused, setPaused] = useState(false);
    const swiperRef = useRef(null);
    const [showUpsell, setShowUpsell] = useState(false);
    const Swiper1 = Swiper;
    const Swiper2 = Swiper;
    const allProducts = videos?.map(video => video?.ugc_video_products).flat();
    useEffect(() => {
        if (typeof activeSlide === 'number') {
            console.log("activeSlide", activeSlide)
            setUpsellProducts(videos[activeSlide]?.ugc_video_products)
        }
    }, [activeSlide, videos, showUpsellContainer,])




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
            {
                !showUpsellContainer && <button style={{
                    position: 'absolute',
                    top: "5px",
                    right: 5,
                    zIndex: 999,
                    width: '35px',
                    height: '35px',
                    backgroundColor: '#B1B1B180',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                }} onClick={() => {
                    setViewSidePlayer(false)
                    setActiveSlide(null)
                }} >
                    <RenderIcon fill="white" id="closeIcon1" />
                </button>
            }

            {
                !showUpsellContainer && (<div style={{
                    position: 'absolute',
                    top: "5px",
                    left: 5,
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
                            onClick={() => setMuted(false)}><RenderIcon fill="white" id="speakerIcon1" /></button> : <button
                                style={muteButtonStyle}
                                onClick={() => setMuted(true)}>
                            <RenderIcon fill="white" id="muteIcon1" />
                        </button>
                    }
                    {
                        paused ? <button
                            style={muteButtonStyle}
                            onClick={() => setPaused(false)}>
                            <RenderIcon fill="white" id="playIcon1" />
                        </button> : <button
                            style={muteButtonStyle}
                            onClick={() => setPaused(true)}>
                            <RenderIcon fill="white" id="pauseIcon1" />
                        </button>
                    }
                    {
                        true ? <button
                            style={muteButtonStyle}
                            onClick={() => { }}>
                            <RenderIcon fill="white" id="3dotsIcon1" />
                        </button> : null
                    }
                </div>)
            }
            <div style={{
                position: 'absolute',
                bottom: "5px",
                left: 5,
                zIndex: 999,
                backgroundColor: 'transparent',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'start',
                gap: '10px',
            }}>
                {
                    !showUpsell ? (
                        <button style={{
                            backgroundColor: '#B1B1B180',
                            padding: '0 0 0 5px',
                            borderRadius: '50px',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'white',
                            display: 'flex',
                            gap: '5px',
                            alignItems: 'center',
                        }} onClick={() => {
                            setShowUpsell(true)
                        }}>
                            View products <div style={{
                                marginTop: '10px',
                            }}><RenderIcon fill="white" id="downArrowIcon1" /></div>
                        </button>
                    ) :
                        !showUpsellContainer && (
                            <div style={{
                                display: 'flex',
                                gap: '10px',
                                flexDirection: 'column',
                            }} >
                                <button
                                    onClick={() => setShowUpsell(false)}
                                    style={{
                                        width: '45px',
                                        backgroundColor: '#B1B1B180',
                                        borderRadius: '5px',
                                        border: 'none',
                                        cursor: 'pointer',

                                    }}>
                                    close
                                </button>
                                <div style={{
                                    display: 'flex',
                                    gap: '10px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    borderRadius: '5px',
                                }}>

                                    <Swiper2
                                        freeMode={true}
                                        spaceBetween={"10px"}
                                        style={{
                                            borderRadius: '10px',
                                            width: "290px",
                                        }}
                                        direction={'horizontal'}
                                        mousewheel={true}
                                        modules={[Pagination, Mousewheel, Keyboard]}
                                        className="mySwiper2"
                                    >


                                        {
                                            upsellProducts?.map((product, index) => {
                                                return (
                                                    <SwiperSlide

                                                        style={{
                                                            padding: '0px !important',
                                                            backgroundColor: 'transparent',
                                                        }}
                                                        key={product.id}>

                                                        <div key={product.id} style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            padding: '5px',
                                                            backgroundColor: '#FFFFFF',
                                                            borderRadius: '5px',
                                                            marginBottom: '5px',
                                                        }}>
                                                            <div style={{
                                                                display: 'flex',
                                                                gap: '10px',
                                                                alignItems: 'center',
                                                            }}>
                                                                <img src={product.product_image} style={{
                                                                    width: '50px',
                                                                    height: '50px',
                                                                    borderRadius: '5px',
                                                                }} />
                                                                <div>
                                                                    <h4>{product?.title}</h4>
                                                                    {/* <p style={{
                                                                        color: 'red',
                                                                    }}>${product.price} <span style={{
                                                                        textDecoration: 'line-through',
                                                                        color: 'gray',
                                                                    }}>${product.compareAtPrice}</span></p> */}
                                                                    <button
                                                                        style={{
                                                                            backgroundColor: 'lightGray',
                                                                            padding: '5px',
                                                                            borderRadius: '5px',
                                                                            border: 'none',
                                                                            color: 'white',
                                                                            cursor: 'pointer',
                                                                        }}
                                                                        onClick={() => {
                                                                            setShowUpsellContainer(true)
                                                                        }}
                                                                    >
                                                                        Choose options
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <button
                                                                onClick={() => {
                                                                    setShowUpsellContainer(true)
                                                                }}
                                                                style={{
                                                                    backgroundColor: 'black',
                                                                    padding: '5px',
                                                                    borderRadius: '5px',
                                                                    border: 'none',
                                                                    color: 'white',
                                                                    cursor: 'pointer',
                                                                }}>Shop</button>
                                                        </div>
                                                    </SwiperSlide>

                                                )
                                            })
                                        }
                                    </Swiper2>
                                </div>

                            </div>
                        )
                }
            </div>
            <div style={{
                position: 'absolute',
                bottom: "5px",
                right: 5,
                zIndex: 999,
                backgroundColor: 'transparent',
                padding: '5px',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'start',
                gap: '10px',
            }}>
                {
                    !showUpsell && (
                        <button style={{
                            backgroundColor: '#B1B1B180',
                            padding: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '43px',
                            height: '43px',
                            borderRadius: '50px',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'white',
                            gap: '5px',
                        }} onClick={() => {
                            // setShowUpsell(true)
                        }}>
                            DY
                        </button>
                    )
                }
            </div>
            {
                showUpsellContainer && (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        justifyContent: 'start',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'inherit',
                    }} >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <button
                                style={{
                                    width: '45px',
                                    backgroundColor: '#B1B1B180',
                                    borderRadius: '5px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    height: '30px',
                                    margin: '8px',
                                }}
                                onClick={() => {
                                    setShowUpsellContainer(false)
                                }}
                            >
                                Back
                            </button>
                            {
                                false && <div style={{
                                    margin: '8px',
                                    display: 'flex',
                                    gap: '5px',
                                }}>
                                    <button
                                        style={{
                                            backgroundColor: displayType === 'grid' ? 'black' : 'lightGray',
                                            padding: '5px',
                                            borderRadius: '5px',
                                            border: 'none',
                                            color: 'white',
                                            cursor: 'pointer',
                                        }}
                                        onClick={
                                            () => {
                                                setDisplayType('grid')
                                            }
                                        }>Grid</button>
                                    <button
                                        style={{
                                            backgroundColor: displayType != 'grid' ? 'black' : 'lightGray',
                                            padding: '5px',
                                            borderRadius: '5px',
                                            border: 'none',
                                            color: 'white',
                                            cursor: 'pointer',
                                        }}
                                        onClick={
                                            () => {
                                                setDisplayType('list')
                                            }
                                        }>List</button>
                                </div>
                            }
                        </div>
                        <h3>Products in the video</h3>
                        <div style={{
                            display: 'grid',
                            flexDirection: 'column',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                            gap: '5px',
                            overflow: 'auto',
                        }}>
                            {
                                allProducts?.map(product => {
                                    return (
                                        <ProductCard key={product?.id} product={product} />
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
            {
                !showUpsellContainer && <Swiper1
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


                    {
                        videos.map((video, index) => {
                            console.log('💎 file: verticalPlayer.jsx:76 💎 VerticalPlayer 💎 index:', index)
                            return (
                                <SwiperSlide
                                    className='dynamatic-swiper-slide'
                                    style={{
                                        width: "300px",
                                        height: "600px",
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
                                            height: "600px",
                                            objectFit: 'cover',
                                            scale: 1.5,
                                            borderRadius: '10px',
                                            backgroundColor: 'transparent',
                                        }}
                                        playing={activeSlide === index && !paused}
                                        loop
                                        muted={!muted}
                                        height={"600px"} width={"300px"} key={video?.id} url={video?.video_url} />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper1>
            }
        </div>
    );
}
