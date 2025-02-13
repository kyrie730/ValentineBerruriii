import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import day from "../../assets/tulip_field.png";
import rain from "../../assets/rain.png";
import valentine from "../../assets/valentine.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Typography } from "@mui/material";

export function ForYou() {
  const [currentPage, setCurrentPage] = useState(0);

  const queryParams = new URLSearchParams(window.location.search);
  const name = atob(decodeURIComponent(queryParams.get("name") || ""));
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const reason = atob(decodeURIComponent(queryParams.get("reason") || ""));
  return (
    <div className="flex flex-col h-screen w-screen bg-[#efc9c9]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        className="w-screen h-23/24 bg-[#F5C2C2]"
        onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex)}
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${day})` }}
            className="flex flex-col gap-12 sm:gap-0 h-full w-screen p-8 sm:p-0 bg-[#ffd4cc] bg-cover bg-top"
          >
            <div className="flex sm:h-1/2 text-center justify-start pt-10 sm:pl-8 sm:pt-8">
              <div className="text-[#D67272] font-bold text-4xl sm:text-6xl drop-shadow-md font-poppins">
                <motion.p
                  key={currentPage}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  The day was filled with warmth
                </motion.p>
              </div>
            </div>
            <div className="flex sm:h-1/2 text-center sm:items-end justify-end sm:pr-8 sm:pb-8">
              <div className="text-[#D67272] font-bold text-4xl sm:text-5xl drop-shadow-md font-poppins">
                <motion.p
                  key={currentPage}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                >
                  Accompanied by the fragrance of blooming roses
                </motion.p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${rain})` }}
            className="flex flex-col gap-1 sm:gap-0 h-full w-screen p-4 sm:p-0 bg-[#ffd4cc] bg-cover bg-center justify-end sm:justify-start"
          >
            <div className="flex justify-start gap-2 sm:ml-44 sm:pt-6">
              <div className="text-gray-500 font-bold text-2xl sm:text-4xl drop-shadow-md font-poppins">
                <motion.p
                  key={currentPage}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  But on this 14th of February
                </motion.p>
              </div>
            </div>
            <div className="flex sm:items-end justify-start sm:justify-start sm:ml-44 sm:pb-16">
              <div className="text-gray-500 font-bold text-4xl sm:text-6xl drop-shadow-md font-poppins">
                <motion.p
                  key={currentPage}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                >
                  Can you figure out what's missing?
                </motion.p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-12 sm:gap-0 h-full w-screen p-8 sm:p-0 bg-[#ffd4cc] bg-cover bg-top text-center">
            <div className="flex h-1/3 items-center justify-center">
              <div className="text-[#D67272] font-bold text-4xl drop-shadow-md font-poppins">
                <motion.p
                  key={currentPage}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  You are {reason}
                </motion.p>
              </div>
            </div>
            <div className="flex h-1/3 items-center justify-center">
              <img
                src={valentine}
                style={{ height: "400px", width: "400px" }}
              />
            </div>
            <div className="flex h-1/3 items-center justify-center">
              <div className="text-[#D67272] font-bold text-4xl drop-shadow-md font-poppins">
                <motion.p
                  key={currentPage}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                >
                  {capitalizedName}, will you be my valentine?
                </motion.p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-between px-3 items-center h-1/24 text-xs text-white">
        <Typography>@adriantowijaya_</Typography>
        <Typography>AWE x Berruriii</Typography>
        <Typography>@berruriii</Typography>
      </div>
    </div>
  );
}
