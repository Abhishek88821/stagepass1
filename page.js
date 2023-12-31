'use client';

import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import $ from "jquery";
import Accordion from 'react-bootstrap/Accordion';
import Header from '../app/Component/Header';
import Footer from '../app/Component/Footer';
import Slider1 from '../app/img/slider.webp';
import About from '../app/img/About.webp';
import Artist from '../app/img/artists.png';
import Location from '../app/img/location.png';
import Booking from '../app/img/booking.png';
import Quotes from '../app/img/quotes.png';
import Quotesright from '../app/img/Quotesright.png';
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LuUser2 } from "react-icons/lu";
import { LuCheck } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { BsCaretLeftFill } from "react-icons/bs";
import { BiSolidErrorCircle } from "react-icons/bi";
import { LuCalendarCheck } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";
import { BsCaretRightFill } from "react-icons/bs";
import { LuWallet2 } from "react-icons/lu";
import { LuMusic } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { FaQuoteRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import Slider from 'react-slick';
import Testimonial from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    nav: true,
    autoplay: true,
    speed: 500, responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };


  var testimonials = {
    dots: true,
    infinite: true,
    nav: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <BsCaretLeftFill />,
    nextArrow: <BsCaretRightFill />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const [numericValue, setNumericValue] = useState("");
  const [formData, setFormData] = useState({
    username: "", phone: "", email: "", city: "", event: "", budget: "", artist: ""
  });

  const [errors, setErrors] = useState({});

  const handleNumericInput = (e) => {
    const inputValue = e.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setNumericValue(inputValue);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "err_msg";
    }

    if (!formData.phone) {
      newErrors.phone = "err_msg";
    } else if (formData.phone == "") {
      newErrors.phone = "suc_msg";
    }

    if (!formData.email) {
      newErrors.email = "err_msg";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "err_msg";
    }


    if (!formData.city) {
      newErrors.city = "err_msg";
    }

    if (!formData.event) {
      newErrors.event = "err_msg";
    }

    if (!formData.budget) {
      newErrors.budget = "err_msg";
    }


    if (!formData.artist) {
      newErrors.artist = "err_msg";
    }

    setErrors(newErrors);
    // alert(Object.keys(newErrors).length);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const newErrors = {};
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      debugger;
      console.log('Form submitted with values:', formData);
    } else {
      console.log('Form has errors.');
    }

  };

  return (
    <>
      <Header />
      {/* slider start */}
      <section className="sli-div position-relative">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <Carousel id="carouselExampleControls" >
                <Carousel.Item>
                  <div class="sli-img">
                    <Image src={Slider1} className="w-100 img-fluid" alt={Slider1} />
                  </div>
                  <div className="sli-div-box" >
                    <h2>Book a Comedian</h2>
                    <p>We assure to enthrall your audience with the best standup comedian</p>
                    <Link href="/Form" className='text-decoration-none' role="button">BOOK COMEDIAN</Link>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div >
          </div >
        </div >
      </section >
      {/* slider end  */}
      {/* comedian encylopedia start */}
      <section className="art-box" >
        <Slider  {...settings} >
          <div>
            <Link href="/1" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://yt3.googleusercontent.com/2oDvijwTwqozWYtqBZA32xuykW6Ocf9s9_-OAroJTfFwRKcIdYwYUCEoGXF08G8hPyrKJd7v=s176-c-k-c0x00ffffff-no-rj" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Kaustubh Agarwal</p>
            </Link>
          </div>
          <div>
            <Link href="/2" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://im.rediff.com/movies/2023/feb/15bassi1.jpg" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Anubhav Singh Bassi</p>
            </Link>
          </div>
          <div>
            <Link href="/3" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://tse4.mm.bing.net/th?id=OIP.61whmDezwnT1mZJWFnOiWwHaGA&pid=Api&P=0&h=220" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Rahul Subramanian</p>
            </Link>
          </div>
          <div>
            <Link href="" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://asianlite.com/wp-content/uploads/2019/08/Sumit-Anand-photo-credit-Nicole-Cleary-small-COVER.jpg" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Sumit Anand</p>
            </Link>
          </div>
          <div>
            <Link href="" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://images.tribuneindia.com/cms/gall_content/2017/11/2017_11$largeimg10_Friday_2017_010433847.jpg" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Zakir Khan</p>
            </Link>
          </div>
          <div>
            <Link href="" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://ik.imagekit.io/j83rchiauw/A_List_Star/gaurav-gupta-facts.jpg" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Gaurav Gupta</p>
            </Link>
          </div>
          <div>
            <Link href="" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://asianlite.com/wp-content/uploads/2019/08/Sumit-Anand-photo-credit-Nicole-Cleary-small-COVER.jpg" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Sumit Anand</p>
            </Link>
          </div>
          <div>
            <Link href="" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://images.tribuneindia.com/cms/gall_content/2017/11/2017_11$largeimg10_Friday_2017_010433847.jpg" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Zakir Khan</p>
            </Link>
          </div>
          <div>
            <Link href="" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://ik.imagekit.io/j83rchiauw/A_List_Star/gaurav-gupta-facts.jpg" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Gaurav Gupta</p>
            </Link>
          </div>
          <div>
            <Link href="" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://img.gurugamer.com/resize/740x-/2021/05/03/tanmay-bhat-1-9247.jpg" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Tanmay Bhat</p>
            </Link>
          </div>
          <div>
            <Link href="" className="text-decoration-none" >
              <div className="art-div-img" >
                <img src="https://freepubgoffers.com/wp-content/uploads/2020/10/Devesh-Dixit-Wiki-Age-Wife-Family-Biography-amp-More.jpg" className="img-fluid w-100" alt="Star Performer" />
              </div>
              <p>Devesh Dixit</p>
            </Link>
          </div>
        </Slider>
      </section>
      {/* comedian encyclopedia end  */}
      {/* why us start  */}
      <section className="why-us-div position-relative" >
        <div className="container" >
          <div className="row" >
            <div className="col-xl-7 col-lg-6 col-md-12 col-12" >
              <div className="title  pb-lg-4 pb-md-3 pb-2" >
                <h2 className='text-start' >Why us?</h2>
                <p>To Hire the best artist for events and shows</p>
              </div>
              <div className="why-us-box" >
                <div className="why-div-cnt row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="why-div-cnt-box">
                      <div className="why-div-cnt-img">
                        <Image src={Artist} className="img-fluid w-100" alt="Artist" />
                      </div>
                      <div className="why-div-cnt-cnt">
                        <h3>440+</h3>
                        <p>ARTIST</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="why-div-cnt-box">
                      <div className="why-div-cnt-img">
                        <Image src={Location} className="img-fluid w-100" alt="Location" />
                      </div>
                      <div className="why-div-cnt-cnt">
                        <h3>50+</h3>
                        <p>LOCATION</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="why-div-cnt-box">
                      <div className="why-div-cnt-img">
                        <Image src={Booking} className="img-fluid w-100" alt="Booking" />
                      </div>
                      <div className="why-div-cnt-cnt">
                        <h3>1K+</h3>
                        <p>BOOKINGS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-12" >
              <div className="why-img" >
                <Image src={About} className="img-fluid w-100" alt={About} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why us end */}
      {/* faq start */}
      <section className="acc-div" >
        <div className="container" >
          <div className="row" >
            <div className="col-lg-12 col-xl-12 col-md-12 col-12" >
              <h2 className='pb-lg-3 pb-md-3 pb-2' >
                ATTRIBUTES THAT DEFINE US -
              </h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>The most exhaustive list to hire an artist</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Streamlined and hassle-free artist booking</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Most competitive prices guaranteed</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* faq end  */}
      {/* testimonial start */}
      <section className="testimonial-box" >
        <div className="container" >
          <div className="row" >
            <div className="col-xl-12 col-lg-12 col-md-12 colc-12" >
              <h2 className='test-title text-center pb-lg-5 pb-md-4 pb-3' >
                They Loved Us... You'll too!
              </h2>
              <Testimonial  {...testimonials} >
                <div>
                  <Link href="javascript:void(0)" className="text-decoration-none" >
                    <div className="tes-div position-relative" >
                      <Image src={Quotes} className='quotes-img' alt={Quotes} />
                      <div className='tes-str-div' >
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <p>Id eu justo eget sed lobortis aliquet faucibus. Condimentum metus purus diam in tempor. Ultrices nisi, sed nulla ornare.</p>
                      <h6>YASH PATHAK</h6>
                      <span>Regional Head HR (Max Life Insurance)</span>
                      <Image src={Quotesright} className='quotes-btm-img' alt={Quotesright} />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="javascript:void(0)" className="text-decoration-none" >
                    <div className="tes-div position-relative" >
                      <Image src={Quotes} className='quotes-img' alt={Quotes} />
                      <div className='tes-str-div' >
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <p>Id eu justo eget sed lobortis aliquet faucibus. Condimentum metus purus diam in tempor. Ultrices nisi, sed nulla ornare.</p>
                      <h6>YASH PATHAK</h6>
                      <span>Regional Head HR (Max Life Insurance)</span>
                      <Image src={Quotesright} className='quotes-btm-img' alt={Quotesright} />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="javascript:void(0)" className="text-decoration-none" >
                    <div className="tes-div position-relative" >
                      <Image src={Quotes} className='quotes-img' alt={Quotes} />
                      <div className='tes-str-div' >
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <p>Id eu justo eget sed lobortis aliquet faucibus. Condimentum metus purus diam in tempor. Ultrices nisi, sed nulla ornare.</p>
                      <h6>YASH PATHAK</h6>
                      <span>Regional Head HR (Max Life Insurance)</span>
                      <Image src={Quotesright} className='quotes-btm-img' alt={Quotesright} />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="javascript:void(0)" className="text-decoration-none" >
                    <div className="tes-div position-relative" >
                      <Image src={Quotes} className='quotes-img' alt={Quotes} />
                      <div className='tes-str-div' >
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <p>Id eu justo eget sed lobortis aliquet faucibus. Condimentum metus purus diam in tempor. Ultrices nisi, sed nulla ornare.</p>
                      <h6>YASH PATHAK</h6>
                      <span>Regional Head HR (Max Life Insurance)</span>
                      <Image src={Quotesright} className='quotes-btm-img' alt={Quotesright} />
                    </div>
                  </Link>
                </div>
              </Testimonial>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial end  */}
      {/* form star  */}
      <section className="frm-div pb-4" >
        <div className="container" >
          <div className="row" >
            <div className="col-xl-12 col-lg-12 col-md-12 col-12" >
              <div className="title pb-xl-5 pb-md-5 pb-4">
                <h2>Let’s make your event awesome too!</h2>
              </div>
              {/* form start */}
              <div className="form-box" >
                <form className="form-div-box row p-0" method="" onSubmit={handleSubmit} >
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                    <div className="frm-div-lbl" >
                      <label>Full Name<span>*</span></label>
                      <div className="frm-div-inp d-flex position-relative" >
                        <LuUser2 className="frm-icn" />
                        <input type="text" className="form-control" placeholder="Type your good name" name="username" value={formData.username} onChange={handleChange} />
                        {errors.username == "err_msg" ? (<BiSolidErrorCircle className="suc-sgn err-sgn" />) : errors.username == "suc_msg" ? (<LuCheck className="suc-sgn suc-msg" />) : (<LuCheck className="suc-sgn" />)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                    <div className="frm-div-lbl" >
                      <label>Phone Number<span>*</span></label>
                      <div className="frm-div-inp d-flex position-relative" >
                        <LuPhoneCall className="frm-icn" />
                        <input type="text" className="form-control" placeholder="0000000000" name="phone" maxLength={10} required="" onInput={handleNumericInput} value={numericValue} onChange={handleChange} />
                        {errors.phone == "err_msg" ? (<BiSolidErrorCircle className="suc-sgn err-sgn" />) : errors.username == "suc_msg" ? (<LuCheck className="suc-sgn suc-msg" />) : (<LuCheck className="suc-sgn" />)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                    <div className="frm-div-lbl" >
                      <label>Email Address<span>*</span></label>
                      <div className="frm-div-inp d-flex position-relative" >
                        <LuMail className="frm-icn" />
                        <input type="text" className="form-control" placeholder="example@email.com" name="email" required="" value={formData.email} onChange={handleChange} />
                        {errors.email == "err_msg" ? (<BiSolidErrorCircle className="suc-sgn err-sgn" />) : errors.username == "suc_msg" ? (<LuCheck className="suc-sgn suc-msg" />) : (<LuCheck className="suc-sgn" />)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                    <div className="frm-div-lbl" >
                      <label>City<span>*</span></label>
                      <div className="frm-div-inp d-flex position-relative" >
                        <LuMapPin className="frm-icn" />
                        <input type="text" className="form-control" placeholder="Type your city" required="" name="city" value={formData.city} onChange={handleChange} />
                        {errors.city == "err_msg" ? (<BiSolidErrorCircle className="suc-sgn err-sgn" />) : errors.username == "suc_msg" ? (<LuCheck className="suc-sgn suc-msg" />) : (<LuCheck className="suc-sgn" />)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                    <div className="frm-div-lbl" >
                      <label>Type of Event<span>*</span></label>
                      <div className="frm-div-inp d-flex position-relative" >
                        <LuCalendarCheck className="frm-icn" />
                        <select className="form-control" name="event" onChange={handleChange} value={formData.event} >
                          {/* <option value="Birthday_Party" >
                                                        Birthday Party
                                                    </option> */}
                          <option value="" label="Select an option" />
                          <option value="option1" label="Option 1" />
                          <option value="option2" label="Option 2" />
                        </select>
                        {errors.event == "err_msg" ? (<BiSolidErrorCircle className="suc-sgn err-sgn" />) : errors.event == "suc_msg" ? (<LuCheck className="suc-sgn suc-msg" />) : (<LuCheck className="suc-sgn" />)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                    <div className="frm-div-lbl" >
                      <label>Budget<span>*</span></label>
                      <div className="frm-div-inp d-flex position-relative" >
                        <LuWallet2 className="frm-icn" />
                        <select className="form-control" name="budget" onChange={handleChange} value={formData.budget} >
                          <option value="" >
                            Choose budget range
                          </option>
                          <option value="10-50k" >
                            10K-50k
                          </option>

                          <option value="10-50k" >
                            100k-300k
                          </option>
                        </select>
                        {errors.budget == "err_msg" ? (<BiSolidErrorCircle className="suc-sgn err-sgn" />) : errors.budget == "suc_msg" ? (<LuCheck className="suc-sgn suc-msg" />) : (<LuCheck className="suc-sgn" />)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                    <div className="frm-div-lbl" >
                      <label>Artist Preference<span>*</span></label>
                      <div className="frm-div-inp d-flex position-relative" >
                        <LuMusic className="frm-icn" />
                        <input type="text" className="form-control" placeholder="Type artist name" name="artist" required="" value={formData.artist} onChange={handleChange} />
                        {errors.artist == "err_msg" ? (<BiSolidErrorCircle className="suc-sgn err-sgn" />) : errors.username == "suc_msg" ? (<LuCheck className="suc-sgn suc-msg" />) : (<LuCheck className="suc-sgn" />)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                    <div className="frm-div-lbl" >
                      <label>Comments<span></span></label>
                      <div className="frm-div-inp d-flex position-relative" >
                        <LuMessageSquare className="frm-icn" />
                        <input type="text" className="form-control" placeholder="Any message for us..." name="message" value={formData.message} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12" >
                    <div className="frm-div-btn text-end mt-lg-3 mt-md-3 mt-sm-2 mt-0" >
                      <input type="submit" className="btn btn-sbt" value="SUBMIT" />
                    </div>
                  </div>
                </form>
              </div>
              {/* form end  */}
            </div>
          </div>
        </div >
      </section >
      {/* form end  */}
      <Footer />

    </>
  )
}
