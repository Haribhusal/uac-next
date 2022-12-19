// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import SingleSlider from './SingleSlider';
import { Navigation } from "swiper";
SwiperCore.use([Autoplay]);

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true} modules={[Navigation]} className="mySwiper"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
    }}
    >
      <SwiperSlide>
        <SingleSlider/>
      </SwiperSlide>
      <SwiperSlide>
        <SingleSlider/>
      </SwiperSlide>
      <SwiperSlide>
        <SingleSlider/>
      </SwiperSlide>
      
    </Swiper>
  );
};