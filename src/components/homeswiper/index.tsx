import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSlider from "../../../public/HomeSlider.png"
import HomeSlider1 from "../../../public/HomeSlider1.png"
import HomeSlider2 from "../../../public/HomeSlider2.png"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import HomeSlide from "../card/homeSlide";

const HomeSwiper = () => {
  return (
    <>
      <Swiper
        style={{display:"flex",height:"497px"}}
        pagination={{
          clickable:true
        }}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        modules={[Pagination,Navigation]}
      >
        <SwiperSlide><HomeSlide img={HomeSlider} title={"SUMMER SALE GET 30% OFF ON ALL DRESS."} button={"SHOP NOW"} subImg1={HomeSlider1} subImg2={HomeSlider2}/></SwiperSlide>
        <SwiperSlide><HomeSlide img={HomeSlider} title={"SUMMER SALE GET 30% OFF ON ALL DRESS."} button={"SHOP NOW"} subImg1={HomeSlider1} subImg2={HomeSlider2}/></SwiperSlide>
        <SwiperSlide><HomeSlide img={HomeSlider} title={"SUMMER SALE GET 30% OFF ON ALL DRESS."} button={"SHOP NOW"} subImg1={HomeSlider1} subImg2={HomeSlider2}/></SwiperSlide>
        <SwiperSlide><HomeSlide img={HomeSlider} title={"SUMMER SALE GET 30% OFF ON ALL DRESS."} button={"SHOP NOW"} subImg1={HomeSlider1} subImg2={HomeSlider2}/></SwiperSlide>
        <Box width={40} height={40} bgcolor={"black"} color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} position={"absolute"} zIndex={1} left={14} bottom={11} className="prev"><KeyboardArrowLeftIcon/></Box>
        <Box width={40} height={40} bgcolor={"black"} color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} position={"absolute"} zIndex={1} right={14} bottom={11}  className="next"><KeyboardArrowRightIcon/></Box>
      </Swiper>
    </>
  );
}
export default HomeSwiper


  
  