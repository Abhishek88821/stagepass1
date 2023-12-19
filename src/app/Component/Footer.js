import Image from 'next/image'
import Link from 'next/link'
import Logo from '../Logo.png'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import '../stagepass.js';


function Footer() {
    return (
        <>
            <footer className="foo-div position-relative pt-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="foo-log-div">
                                <Link  href="#" className="text-decoration-none" role="button">
                                    <Image src={Logo} className="img-fluid w-100" alt="Footer Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12  d-flex justify-content-end align-items-end">
                            <div className="foo-soc-lst">
                                <ul className="list-unstyled d-flex mb-0">
                                    <li>
                                        <Link  href="#" className="text-decoration-none" role="button">
                                           <FaFacebookF />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  href="#" className="text-decoration-none" role="button">
                                        <FaLinkedinIn />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  href="#" className="text-decoration-none" role="button">
                                        <FaInstagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  href="#" className="text-decoration-none" role="button">
                                        <FaTwitter />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="copyright py-md-2 py-2 text-center" >
                            <span>Copyright &copy;2023 All rights reserved</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer