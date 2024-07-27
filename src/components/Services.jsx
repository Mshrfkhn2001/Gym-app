import img1 from "../assets/services.png"
const Services=()=>{
    return (
        <>
        <div className="container-fluid services">
            <div className="container">
                <div className="row gx-0">
                    <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                        <div className="services_col1">
                        <h1 className="main-heading">
                            The Best Program We Offers For You
                        </h1>
                        <div className="services_main pt-3 pb-5" >
                            {/* ************************* */}
                            <div className="form-check py-4">
  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label className="form-check-label" htmlForr="defaultCheck1">
  <h5 className="ps-3">Personal Training</h5>
  </label>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur velit quas in laboriosam eum natus iste saepe amet tempora!</p>
</div>
{/* *********************** */}
<div className="form-check py-4">
  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label className="form-check-label" htmlForr="defaultCheck1">
  <h5 className="ps-3">Personal Training</h5>
  </label>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur velit quas in laboriosam eum natus iste saepe amet tempora!</p>
  </div>
  <div className="form-check py-4">
  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label className="form-check-label" htmlForr="defaultCheck1">
  <h5 className="ps-3">Personal Training</h5>
  </label>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur velit quas in laboriosam eum natus iste saepe amet tempora!</p>
  </div>
{/* *********************** */}

                        </div>
                        <button className='btn1 btn0'>Free Trial Today</button>
                        </div>
                    </div> 
                    <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                        <div className="services_col2 pt-5 pt-md-0">
                            <img src={img1}alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Services;