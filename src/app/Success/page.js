"use client";

import React from 'react'
import Image from 'next/image';
import Footer from '../Component/Footer2';
import logo from '../img/LogoWhite.png';
import success from '../img/success.svg';
import Link from 'next/link';

function page() {
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
            <section className="form-div pb-xl-5 pb-md-5 pb-5" >
                <div className="container" >
                    <div className="row" >
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12" >
                            <div className="title  pb-0">
                                <h1>Yaaay!</h1>
                                <h2>Form Submitted Successfully</h2>
                                <div className="success-img mx-auto text-center" >
                                    {/* <Image src={success} className="img-fluid w-100" alt="Success Icon" /> */}
                                    <div className="animation-ctn">
  	<div className="icon icon--order-success svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
            <g fill="none" stroke="#046e7c" stroke-width="8"> 
              <circle cx="77" cy="77" r="72" style={{strokeDasharray:'480px, 480px', strokeDashoffset: '960px'}}></circle>
              {/* <circle id="colored" fill="transparent" cx="77" cy="77" r="72" style={{strokeDasharray:'480px, 480px', strokeDashoffset: '960px'}}></circle> */}
              <polyline className="st0" stroke="#046e7c" stroke-width="12" points="43.5,77.8 63.7,97.9 112.2,49.4 " style={{strokeDasharray: '100px, 100px', strokeDashoffset: '200px'}}/>   
            </g> 
          </svg>
          </div></div>
                                </div>
                            </div>
                            {/* form start */}
                            <div className="suc-div text-center" >
                                <h3>THANK YOU SO MUCH</h3>
                                <p>We have received your form successfully. We will get back to you as soon as possible!</p>
                                <Link href="/" className="text-decoration-none" role="button" >BACK TO HOME PAGE</Link>
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

export default page