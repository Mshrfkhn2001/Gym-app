import React from "react";
import img1 from"../assets/main-image1-JGVa53bJ.png"
import img2 from "../assets/main-image3-dqYwcZsu.png"
import icon1 from "../assets/icon.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';

// import required modules
import { Autoplay, Scrollbar } from 'swiper/modules';
const Hero=()=>{
    return <>
    {/* *********************************** */}
    <Swiper
        spaceBetween={0}
        centeredSlides={true}
        scrollbar={{
            hide: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Scrollbar]}
          className="mySwiper"
        >

        {/* *********************************** */}
        <SwiperSlide>
        <div className="container-fluid Hero">
        <div className="container gx-0 ">
            <div className="row gx-0">
                <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <div className="Hero_col1"><h1>
                        Build Your Body <span>Transform</span> Your Life</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis veritatis nulla ipsa?</p>
                        <div className="hero_btns">
                            <button className="btn1 btn0">Get Started</button>
                            <button className="play_btn"><img src={icon1} alt="" />
                                Watch Videos
                            </button>
                        </div>
                        </div>
                </div>
                <div className="col-md-6">
                    <div className="Hero_col2"></div> 
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        {/* *********************************** */}
        <SwiperSlide>
        <div className="container-fluid Hero Hero1">
        <div className="container gx-0 ">
            <div className="row gx-0 ">
                <div className="col-md-6" >
                    <div className="Hero_col1"><h1>
                        Get <span>Healthy</span> Body With The <span>Perfect</span> Exercises</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis veritatis nulla ipsa?</p>
                        <div className="hero_btns">
                            <button className="btn1 btn0">Get Started</button>
                            <button className="play_btn"><img src={icon1} alt="" />
                                Watch Videos
                            </button>
                        </div>
                        </div>
                </div>
                <div className="col-md-6">
                    <div className="Hero_col2">
                        <img src={img1} alt="" className="img-fluid"/>
                        </div> 
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        {/* *********************************** */}
        <SwiperSlide>
        <div className="container-fluid Hero Hero2">
        <div className="container gx-0 ">
            <div className="row gx-0 align-items-center">
                <div className="col-md-6 order-md-2">
                    <div className="Hero_col1"><h1>
                        Get <span>Healthy</span> Body With The <span>Perfect</span> Exercises</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis veritatis nulla ipsa?</p>
                        <div className="hero_btns">
                            <button className="btn1 btn0">Get Started</button>
                            <button className="play_btn"><img src={icon1} alt="" />
                                Watch Videos
                            </button>
                        </div>
                        </div>
                </div>
                <div className="col-md-6 order-md-1">
                    <div className="Hero2_col2">
                        <img src={img2} alt="" className="img-fluid"/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        {/* *********************************** */}
      </Swiper>
      {/* *********************************** */}
    </>
}
export default Hero;