import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Swipeer = (props) => {
  return (
    <div className="bg-carousol-shop">
      <div className="wrap-swiper">
        <Swiper slidesPerView={"auto"} spaceBetween={30} className="mySwiper">
          <SwiperSlide>
            <div className="shop-wrap">
              <div className="box-shop">
                <div class="title3-scte">
                  <p>The Analytics</p>
                </div>
                <div class="para-3">
                  <p>
                    Connected to your Google Analytics, the stats here show your
                    store’s analytics, its AOV, its revenue , its conversion
                    rate, and the total users over a set period of time.
                  </p>
                </div>
              </div>
              <img src={props.img1} className="shop-image" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop-wrap">
              <div className="box-shop">
                <div class="title3-scte">
                  <p>The Tests</p>
                </div>
                <div class="para-3">
                  <p>
                    The tests who all your active A/B tests, the ones you have
                    saved in Drafts, the ones that have matured, the ones that
                    have been cancelled, and those that are currently active.
                  </p>
                </div>
              </div>
              <img src={props.img2} className="shop-image" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop-wrap">
              <div className="box-shop">
                <div class="title3-scte">
                  <p>The Lift Kits</p>
                </div>
                <div class="para-3">
                  <p>
                    Lift kits are premade UI cards for your Shopify store, that
                    are easy customizable and editable in the Shopify editor
                  </p>
                </div>
              </div>
              <img src={props.img3} className="shop-image3" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipeer;
