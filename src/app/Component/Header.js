import React  from 'react'
import Image from 'next/image';
import Link from 'next/link'
import logo from '../Logo.png';
import { FaEquals } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

function Header() {

    return (
        <>
            {/* <!-- header start --> */}
            <header className="hea-div">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                            <div className="log-div">
                                <Link href="\" className="text-decoration-none" role="button">
                                    <Image src={logo} className="w-100 img-fluid" alt="react logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-7 col-5" >
                            <div className={"sea-div position-relative"}   >
                                <form className="sea-frm-div" action="" method="" >
                                    <div className="sea-frm-box" >
                                        <BsSearch />
                                        <input type="text" className="form-control" placeholder='Search Artists Here...' id="" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-1 col-sm-1 col-1">
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
