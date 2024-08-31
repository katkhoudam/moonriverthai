import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

export default function LuxuryCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      effect="fade"
      autoplay={{ delay: 3000 }}
      className="h-96"
    >
      <SwiperSlide>
        <img src="/images/slide1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slide2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slide3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
