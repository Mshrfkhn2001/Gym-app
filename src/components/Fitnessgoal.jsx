import img1 from '../assets/partner1.png'
import img2 from '../assets/partner2.png'
import img3 from '../assets/partner3.png'
import img4 from '../assets/fitness1.jpeg'
import icon from '../assets/gymicon.jpg'
const Fitnessgoal=()=>{
    return(
    <>
    <div className="container-fluid Fitness_Goal">
        <div className="container">
            <div className="row gx-0 align-items-center">
                <div className="col-md-5">
                    <div className="fitness_col1">
                        <h1 className='text-bold'>120K + More</h1>
                        <p>Trusted Companies Partner</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="fitness_col2">
                        <img src={img1} alt="" className='img-fluid px-3'/>
                        <img src={img2} alt="" className='img-fluid px-3'/>
                        <img src={img3} alt="" className='img-fluid px-3'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* ******************** */}
    <div className="container-fluid Fitness_Goal1">
        <div className="container">
            <div className="row gx-0 align-items-center">
                <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <div className="fitness_col3">
                    <img src={img4} alt="" className='img-fluid'/>
                    <div className="popup">
                        <img src={icon} alt="" className='fitness-icon'/>
                        <h5 className='fw-bold'>Professional Trainer</h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-6" >
                    <div className="fitness_col4">
                        <h1 className='main-heading' data-aos="fade-left" data-aos-duration="1300"
    data-aos-easing="ease-in-out">Get Ready To Reach Your Fitness Goals</h1>
                        <div className="pt-3 pb-4" data-aos="fade-left" data-aos-duration="1400"
    data-aos-easing="ease-in-out">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil odio corporis, fugit ducimus ea molestias veritatis ab id quasi sed.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis totam illo cum.</p>
                        </div>
                        <button className='btn1 btn0' data-aos="fade-left" data-aos-duration="1600"
    data-aos-easing="ease-in-out">Free Trial Today</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default Fitnessgoal;
