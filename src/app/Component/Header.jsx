import React from 'react'

import Image from 'next/image';
import Link from 'next/link'
import logo from '../Logo.png';
// import Menu from '../img/tabler_menu.svg';
import { FaEquals } from "react-icons/fa";


function Header() {
    return (
        <>
            {/* <!-- header start --> */}
            <header className="hea-div">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="log-div">
                                <Link href="\" className="text-decoration-none" role="button">
                                <Image src={logo} className="w-100 img-fluid"  alt="react logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="men-icn position-relative text-md-end">
                                <Link href="javascript:void(0)" className="text-decoration-none" role="button">
                                <FaEquals />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- header end --> */}
        </>
    )
}

export default Header