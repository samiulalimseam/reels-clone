import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NestedSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div style={{ padding: "20px", background: "#f3f3f3" }}>
          <h2>Slide 1</h2>
          <p>Content for the first slide.</p>
        </div>
      </SwiperSlide>

      {/* This Slide Contains Another Swiper */}
      <SwiperSlide>
        <div style={{ padding: "20px", background: "#e3e3e3" }}>
          <h2>Slide 2 (With Nested Swiper)</h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div style={{ padding: "10px", background: "#ccc" }}>Nested Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ padding: "10px", background: "#bbb" }}>Nested Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ padding: "10px", background: "#aaa" }}>Nested Slide 3</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ padding: "20px", background: "#d3d3d3" }}>
          <h2>Slide 3</h2>
          <p>Content for the third slide.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default NestedSwiper;
