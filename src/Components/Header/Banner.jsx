import img1 from "../../assets/MatterHorn.jpg";
import img2 from "../../assets/Road.jpg";
import img3 from "../../assets/Lake Geneva.jpg";
import img4 from "../../assets/jungfrau.jpg"
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="gadgetContainer lg:h-[600px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* One */}
        <SwiperSlide>
          <div className=" h-auto ">
            <div className="h-full
              items-center">
              {/* right */}
              <div className="w-full lg:h-[550px] ">
                <img className="h-full object-cover rounded-xl w-full" src={img1} alt="" />
              </div>
              {/* left */}
            </div>
            <div className="text-start relative bottom-96 left-36 text-white">
                <p className="lg:text-6xl text-xl md:text-4xl font-bold">Millons of Exparience. <br /> One Simple Search.</p>
                <p className="text-xl mt-3 font-semibold">Find What makes you happy anytime,anywhere</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-auto ">
            <div className="h-full
              items-center">
              {/* right */}
              <div className="w-full lg:h-[550px] ">
                <img className="h-full object-cover rounded-xl w-full" src={img2} alt="" />
              </div>
              {/* left */}
            </div>
            <div className="text-start relative bottom-96 left-36 text-white">
                <p className="lg:text-6xl text-xl md:text-4xl font-bold">Millons of Exparience. <br /> One Simple Search.</p>
                <p className="text-xl mt-3  font-semibold">Find What makes you happy anytime,anywhere</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-auto ">
            <div className="h-full
              items-center">
              {/* right */}
              <div className="w-full lg:h-[550px] ">
                <img className="h-full object-cover rounded-xl w-full" src={img3} alt="" />
              </div>
              {/* left */}
            </div>
            <div className="text-start relative bottom-96 left-36 text-white">
                <p className="lg:text-6xl text-xl md:text-4xl font-bold">Millons of Exparience. <br /> One Simple Search.</p>
                <p className="text-xl mt-3  font-semibold">Find What makes you happy anytime,anywhere</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-auto ">
            <div className="h-full
              items-center">
              {/* right */}
              <div className="w-full lg:h-[550px] ">
                <img className="h-full object-cover rounded-xl w-full" src={img4} alt="" />
              </div>
              {/* left */}
            </div>
            <div className="text-start relative bottom-96 left-36 text-white">
                <p className="lg:text-6xl text-xl md:text-4xl font-bold">Millons of Exparience. <br /> One Simple Search.</p>
                <p className="text-xl mt-3  font-semibold">Find What makes you happy anytime,anywhere</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
