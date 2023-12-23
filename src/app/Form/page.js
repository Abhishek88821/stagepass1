"use client";

// import React from "react";
import React, { useState } from 'react';
import axios from "axios";
import Footer from "../Component/Footer2";
import Link from "next/link";
import Image from "next/image";
import logo from "../img/LogoWhite.png";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LuUser2 } from "react-icons/lu";
import { LuCheck } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { BiSolidErrorCircle } from "react-icons/bi";
import { LuCalendarCheck } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";
import { LuWallet2 } from "react-icons/lu";
import { LuMusic } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";

function Page() {

    const [numericValue, setNumericValue] = useState("");
    const [formData, setFormData] = useState({
        username: "", phone: "", email: "", city: "", artist: "", message: ""
    });
    const [errors, setErrors] = useState({});

    const handleNumericInput = (e) => {
        const inputValue = e.target.value;
        if (/^\d*\.?\d*$/.test(inputValue)) {
            setNumericValue(inputValue);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        formData.username.trim() == "" ? newErrors.username = "err_msg" : newErrors.username = "suc_msg";
        numericValue.trim() == "" ? newErrors.phone = "err_msg" : newErrors.phone = "suc_msg";
        formData.email.trim() == "" ? newErrors.email = "err_msg" : newErrors.email = "suc_msg";
        formData.city.trim() == "" ? newErrors.city = "err_msg" : newErrors.city = "suc_msg";
        formData.artist.trim() == "" ? newErrors.artist = "err_msg" : newErrors.artist = "suc_msg";
        formData.message.trim() == "" ? newErrors.message = "err_msg" : newErrors.message = "suc_msg";

        if (newErrors.username == "suc_msg" && newErrors.phone == "suc_msg" && newErrors.email == "suc_msg" && newErrors.city == "suc_msg" && newErrors.artist == "suc_msg" && newErrors.message == "suc_msg") {
            window.location.href="/Success";
        } else {
            setErrors(newErrors);
        }

    };


    return (
        <>
            {/* Logo start */}
            <div className="hea-log" >
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12" >
                            <div className="log-div mx-auto my-xl-5 my-sm-4 my-3">
                                <Link href="\" className="text-decoration-none" role="button">
                                    <Image src={logo} className="w-100 img-fluid" alt="react logo" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Logo end  */}
            <section className="form-div pb-xl-4 pb-md-4 pb-4" >
                <div className="container" >
                    <div className="row" >
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12" >
                            <div className="title pb-xl-5 pb-md-5 pb-4">
                                <h2>It's boring, I know...</h2>
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
                                                <select className="form-control" >
                                                    <option value="Birthday_Party" >
                                                        Birthday Party
                                                    </option>
                                                </select>
                                                <LuChevronDown className="suc-sgn drk" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                                        <div className="frm-div-lbl" >
                                            <label>Budget<span>*</span></label>
                                            <div className="frm-div-inp d-flex position-relative" >
                                                <LuWallet2 className="frm-icn" />
                                                <select className="form-control"  >
                                                    <option value="1" >
                                                        Choose budget range
                                                    </option>
                                                    <option value="10-50k" >
                                                        10K-50k
                                                    </option>
                                                    
                                                    <option value="10-50k" >
                                                        100k-300k
                                                    </option>
                                                </select>
                                                <LuChevronDown className="suc-sgn drk" />
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
                                            <label>Comments<span>*</span></label>
                                            <div className="frm-div-inp d-flex position-relative" >
                                                <LuMessageSquare className="frm-icn" />
                                                <input type="text" className="form-control" placeholder="Any message for us..." name="message" value={formData.message} onChange={handleChange} />
                                                {errors.message == "err_msg" ? (<BiSolidErrorCircle className="suc-sgn err-sgn" />) : errors.username == "suc_msg" ? (<LuCheck className="suc-sgn suc-msg" />) : (<LuCheck className="suc-sgn" />)}
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
            <Footer />
        </>
    )
}

export default Page;