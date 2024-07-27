import logo from '../assets/logo_main-48JSqkPZ.png'
const Footer=()=>{
    return (
        <>
        <div className="container-fluid Footer pt-5">
            <div className="container">
                <div className="row gx-0 py-4 footer_row1">
                    <div className="col-md-2">
                        <div className="footer_col1">
                        <h5 className="ft_h5">Company</h5>
                            <ul>
                                <li className='list'>
                                    <a href="#">About Us</a>
                                </li>
                                <li className='list'>
                                    <a href="#">Why us</a>
                                </li>
                                <li className='list'>
                                    <a href="#">Security</a>
                                </li>
                                <li className='list'>
                                    <a href="#">Partnership</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <div className="footer_col1">
                        <h5 className="ft_h5">Company</h5>
                            <ul>
                                <li className='list'>
                                    <a href="#">About Us</a>
                                </li>
                                <li className='list'>
                                    <a href="#">Why us</a>
                                </li>
                                <li className='list'>
                                    <a href="#">Security</a>
                                </li>
                                <li className='list'>
                                    <a href="#">Partnership</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <div className="footer_col1">
                        <h5 className="ft_h5">Company</h5>
                            <ul>
                                <li className='list'>
                                    <a href="#">About Us</a>
                                </li>
                                <li className='list'>
                                    <a href="#">Why us</a>
                                </li>
                                <li className='list'>
                                    <a href="#">Security</a>
                                </li>
                                <li className='list'>
                                    <a href="#">Partnership</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer_col2">
                            <h5 className="ft_h5">Contact Us</h5>
                            <div className="row pb-3">
                                <div className="col-1">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="col-11">
                                    <p>+91 9125329898</p>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="col-1">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="col-11">
                                    <p>mshrfkhn2001@gmail.com</p>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="col-1">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="col-11">
                                    <p>#G-23, Batla House,Delhi,India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer_col3">
                        <h5 className="ft_h5">Subscribe Our Newsletter</h5>
                        <form action="#">
                        <div className="input-group mb-3">
  <input className="form-control" type="email" placeholder="Enter your Email"aria-label="Recipient's username" aria-describedby="button-addon2" required/>
  <button className="" type="submit" id="button-addon2"><i className="fa-solid fa-paper-plane"></i></button>
</div>
                        </form>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 footer_row2 align-items-center py-3">
                    <div className="col-md-3">
                        <img src={logo} alt="" className="img-fluid footer_img"/>
                    </div>
                    <div className="col-md-6 text-center">
                        <p>@2024 <span>Musharraf</span>. All Copyrights reserved.</p>
                    </div>
                    <div className="col-md-3 text-md-end">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;