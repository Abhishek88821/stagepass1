'use client';

import React from 'react';
// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
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

function page() {

return (
    <>
        <section className="form-div pb-xl-5 pb-md-5 pb-5" >
            <div className="container" >
                <div className="row" >
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12" >
                        <div className="title pb-xl-5 pb-md-5 pb-4">
                            <h2>It's boring, I know</h2>
                        </div>
                        {/* form start */}
                        <div className="form-box" >
                            <form className="form-div-box row p-0" method="" >
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12' >
                                    <div className='frm-div-lbl' >
                                        <label>Full Name<span>*</span></label>
                                        <div className="frm-div-inp d-flex position-relative" >
                                            <LuUser2 className="frm-icn" />
                                            <input type="text" className='form-control' placeholder='Type your good name' required="" name="fullName"  />
                                            <LuCheck className="suc-sgn" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12' >
                                    <div className='frm-div-lbl' >
                                        <label>Phone Number<span>*</span></label>
                                        <div className="frm-div-inp d-flex position-relative" >
                                            <LuPhoneCall className="frm-icn" />
                                            <input type="text" className='form-control' placeholder='0000000000' name="phoneNumber"  maxLength={10} required="" />
                                            <LuCheck className="suc-sgn" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12' >
                                    <div className='frm-div-lbl' >
                                        <label>Email Address<span>*</span></label>
                                        <div className="frm-div-inp d-flex position-relative" >
                                            <LuMail className="frm-icn" />
                                            <input type="text" className='form-control' placeholder='example@email.com' name="emailAddress"  required="" />
                                            <LuCheck className="suc-sgn" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12' >
                                    <div className='frm-div-lbl' >
                                        <label>City<span>*</span></label>
                                        <div className="frm-div-inp d-flex position-relative" >
                                            <LuMapPin className="frm-icn" />
                                            <input type="text" className='form-control' placeholder='Type your city' required="" name="city"  />
                                            <BiSolidErrorCircle className="suc-sgn" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12' >
                                    <div className='frm-div-lbl' >
                                        <label>Type of Event<span>*</span></label>
                                        <div className="frm-div-inp d-flex position-relative" >
                                            <LuCalendarCheck className="frm-icn" />
                                            <input type="text" className='form-control' placeholder='Choose event type'  name="typeofEvent" required="" />
                                            <LuChevronDown className="suc-sgn" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12' >
                                    <div className='frm-div-lbl' >
                                        <label>Budget<span>*</span></label>
                                        <div className="frm-div-inp d-flex position-relative" >
                                            <LuWallet2 className="frm-icn" />
                                            <input type="text" className='form-control' placeholder='Choose budget range' required="" />
                                            <LuChevronDown className="suc-sgn" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12' >
                                    <div className='frm-div-lbl' >
                                        <label>Artist Preference<span>*</span></label>
                                        <div className="frm-div-inp d-flex position-relative" >
                                            <LuMusic className="frm-icn" />
                                            <select className='form-control' required="" >
                                                <option value="Kaustubh Agarwal" >
                                                Kaustubh Agarwal
                                                </option>
                                            </select>
                                            <LuCheck className="suc-sgn" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12' >
                                    <div className='frm-div-lbl' >
                                        <label>Comments<span>*</span></label>
                                        <div className="frm-div-inp d-flex position-relative" >
                                            <LuMessageSquare className="frm-icn" />
                                            <input type="text" className='form-control' placeholder='Any Message for us...' required="" />
                                            <BiSolidErrorCircle className="suc-sgn" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-12' >
                                    <div className='frm-div-btn text-end mt-lg-3 mt-md-3 mt-sm-2 mt-0' >
                                        <input type="submit" className='btn btn-sbt' value="SUBMIT" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* form end  */}
                    </div>
                </div>
            </div >
        </section >
    </>
)
}

export default page
