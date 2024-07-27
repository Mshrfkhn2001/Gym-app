import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Autoplay,EffectCreative } from 'swiper/modules';
import img1 from '../assets/test1.jpg'
import icon from '../assets/test_icon.png'
import img2 from '../assets/test_partner.png'
const Testimonials=()=>{
    return (
        <>
        <div className="container-fluid testimonial">
            <div className="container">
                <div className="row gx-0">
                    <div className="col-md-7" data-aos="fade-right" data-aos-duration="1000">
                        <div className="testimonial_col1 pe-md-5 me-md-5">
                        <h1 className='main-heading'>What Our happy Clients Say About Us</h1>
                        <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic soluta laborum optio minima nemo ipsum odit unde eos quos illo.</p>
                        <div className="row pt-2 align-items-center">
                            <div className="col-md-5">
                            <div className="test_imgages">
                            <img src={img1} alt="" className='img-fluid'/>
                            <img src={img1} alt="" className='img-fluid test_imgages1'/>
                            <img src={img1} alt="" className='img-fluid test_imgages2'/>
                            <img src={img1} alt="" className='img-fluid test_imgages3'/>
                            <img src={icon} alt="" className='img-fluid test_imgages3'/>
                        </div>
                            </div>
                            <div className="col-md-7 gx-0">
                                <p className='test_p3'><i className ="fa-solid fa-star"></i> 4.9(450 Reviews)</p>
                            </div>
                        </div>
                        <img src={img2} alt="" className='img-fluid py-3'/>
                        </div>
                    </div>
                    <div className="col-md-5" data-aos="fade-left" data-aos-duration="1000">
                        <div className="testimonial_col2">
                        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[ Autoplay,EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="row test_main">
                <div className="col-12">
                    <div className="row gx-0 align-items-center">
                        <div className="col-4 text-center">
                            <img src={img1} alt="" className='img-fluid'/>
                        </div>
                        <div className="col-8">
                            <h5>Farhan Khan</h5>
                            <p className='test_p1 pt-1'>Happy Customer</p>
                        </div>
                    </div>
                    <div className="stars py-3">
                            <i className ="fa-solid fa-star"></i>
                            <i className ="fa-solid fa-star"></i>
                            <i className ="fa-solid fa-star"></i>
                            <i className ="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            </div>
                    <p className='test_p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores quaerat nihil est praesentium excepturi commodi ullam molestiae quam ad veritatis, obcaecati eius, expedita eveniet!</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="row test_main">
                <div className="col-12">
                    <div className="row gx-0 align-items-center">
                        <div className="col-4 text-center">
                            <img src={img1} alt="" className='img-fluid'/>
                        </div>
                        <div className="col-8">
                            <h5>Farhan Khan</h5>
                            <p className='test_p1 pt-1'>Happy Customer</p>
                        </div>
                    </div>
                    <div className="stars py-3">
                            <i className ="fa-solid fa-star"></i>
                            <i className ="fa-solid fa-star"></i>
                            <i className ="fa-solid fa-star"></i>
                            <i className ="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            </div>
                    <p className='test_p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores quaerat nihil est praesentium excepturi commodi ullam molestiae quam ad veritatis, obcaecati eius, expedita eveniet!</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="row test_main">
                <div className="col-12">
                    <div className="row gx-0 align-items-center">
                        <div className="col-4 text-center">
                            <img src={img1} alt="" className='img-fluid'/>
                        </div>
                        <div className="col-8">
                            <h5>Farhan Khan</h5>
                            <p className='test_p1 pt-1'>Happy Customer</p>
                        </div>
                    </div>
                    <div className="stars py-3">
                            <i className ="fa-solid fa-star"></i>
                            <i className ="fa-solid fa-star"></i>
                            <i className ="fa-solid fa-star"></i>
                            <i className ="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            </div>
                    <p className='test_p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores quaerat nihil est praesentium excepturi commodi ullam molestiae quam ad veritatis, obcaecati eius, expedita eveniet!</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Testimonials;