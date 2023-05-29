// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
interface IProductSwiper{
  img:string
}
const ProductSwiper = (i:IProductSwiper) => {
  return (
    <>
      <Swiper
        style={{display:"flex",height:"310px"}}
        pagination={{
          clickable:true
        }}
        modules={[Pagination,Navigation]}
      >
        <SwiperSlide><Box position={"absolute"} zIndex={"-1"} component={"img"} width={320} height={255} src={i.img}></Box></SwiperSlide>
        <SwiperSlide><Box position={"absolute"} zIndex={"-1"} component={"img"} width={320} height={255} src={i.img}></Box></SwiperSlide>
        <SwiperSlide><Box position={"absolute"} zIndex={"-1"} component={"img"} width={320} height={255} src={i.img}></Box></SwiperSlide>
        <SwiperSlide><Box position={"absolute"} zIndex={"-1"} component={"img"} width={320} height={255} src={i.img}></Box></SwiperSlide>
      </Swiper>
    </>
  );
}
export default ProductSwiper


  
  