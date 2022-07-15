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
      className="h-9/12 w-9/12"
    >
      { products.length > 0 && products.map(product => (
          <SwiperSlide key={Math.floor(product.image.length * Math.random())}
                 className="shadow-md rounded-lg border border-gray-400">
            <CardProduct image={product.image} />
          </SwiperSlide>))
      }
    </Swiper>
  )
}

export default CardProductsSwipeable;