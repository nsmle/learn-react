import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel, Keyboard, Autoplay } from "swiper";
import CardProduct from './CardProduct'
import "swiper/css";
import "swiper/css/effect-cards";

const CardProductsSwipeable = ({ products }) => {
  
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      mousewheel={true}
      loop={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
      modules={[EffectCards, Mousewheel, Keyboard, Autoplay]}
      className="block w-8/12 md:w-auto max-w-sm"
    >
      { products.length > 0 && products.map(product => (
          <SwiperSlide key={Math.floor(product.image.length * Math.random())}
                 className="max-h-64 max-w-96 shadow-md rounded-lg border border-gray-400">
            <CardProduct image={product.image} />
          </SwiperSlide>))
      }
    </Swiper>
  )
}

export default CardProductsSwipeable;