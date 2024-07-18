import React from "react";
import '../App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import odpng from "../assets/Rectangle3.png";
import odpng1 from "../assets/Rectangle1.png";
import odpng2 from "../assets/Rectangle2.png";
// import { EffectCoverflow, Pagination, Navigation } from "swiper";


const Images = [
  {
    "id": 1,
    "current_image": odpng,
  },
  {
    "id": 2,
    "current_image": odpng1,
  },
  {
    "id": 3,
    "current_image": odpng2,
  },
];


function Cantact() {
  return (
    <div className="container">
      
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        // modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container flex-none hide-scrollbar overflow-x-auto"
      >
        {Images.map((img) => {
          return (
            <SwiperSlide>
              <img src={img.current_image} width={200} alt="slider images" />
            </SwiperSlide>
          );
        })}

<div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

          </div>
          <div className="swiper-button-next slider-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </div>
  );
}

export default Cantact;
