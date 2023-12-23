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
                                <div class="success-img mx-auto" >
                                    <Image src={success} className="img-fluid w-100" alt="Success Icon" />
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