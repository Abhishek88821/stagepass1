'use client';

import React from 'react';
// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





function page() {

    // const [comedians, setComedians] = useState([]);

    // const comedians = { "artist_id": 2, "artist_name": "Kaustubh Agarwal", "description": "Integer arcu commodo purus mauris volutpat. Mi amet pharetra id malesuada pulvinar ac. Ipsum augue et diam est vitae dignissim. Augue mauris semper fusce at. Venenatis tempus sit volutpat sit vivahs. Integer arcu commodo purus mauris volutpat. Mi amet pharetra id malesuada pulvinar ac. Ipsum augue et diam est vitae dignissim. Augue mauris semper fusce at. Venenatis tempus sit volutpat sit vivahs.", "artist_image": "https://stagepass-static-host.s3.ap-south-1.amazonaws.com/Event+Banner.jpeg", "medias": { "videos": ["https://www.youtube.com/watch?v=LKdUF7nO_zU"], "images": ["https://stagepass-static-host.s3.ap-south-1.amazonaws.com/Event+Banner.jpeg"] }, "years_of_experience": "4+", "number_of_shows": "550+", "youtube_views": "10M+", "number_of_followers": "220K+", "instagram_link": "https://www.instagram.com/hilarious_big/", "youtube_link": "https://www.youtube.com/@ComicKaustubhAgarwal/featured", "metadata_link": ["https://www.primevideo.com/detail/0KJWUBZI40J231BM4RWYV402V9/ref=atv_dp_share_cu_r", "https://www.primevideo.com/detail/0KJWUBZI40J231BM4RWYV402V9/ref=atv_dp_share_cu_r"], "previous_work": [{ "label": "Stand-Up Videos", "link": "https://www.youtube.com/@ComicKaustubhAgarwal/videos" }, { "label": "Bidi News", "link": "https://www.youtube.com/shorts/rMeQDFrdtkg" }] }

    // useEffect(() => {
    // fetch('https://dev-8hm08e04mtdz10e.api.raw-labs.com/stagepass-prive?artist_id=' + id)
    //     .then(response => response.json())
    //     .then(data => setComedians(data))
    //     .catch(err => console.log(err))
    // }, [])
    return (
        <>
            <section className="ecy-div" >
                <div className="container" >
                    <div className="row" >
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12" >
                            <div className="title pb-xl-3 pb-md-2 pb-2">
                                <h2>Artists Encyclopedia</h2>
                            </div>
                            {/* Star Performers start */}
                            <div className="str-pfm-div mt-xl-5 mt-md-5 mt-3" >
                                <div className="title" >
                                    <h3>Star Performers</h3>
                                </div>
                                <div className="str-pfm-box" >
                                    <ul className="d-flex flex-wrap list-unstyled" >
                                    <li>
                                            <Link href="1" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://yt3.googleusercontent.com/2oDvijwTwqozWYtqBZA32xuykW6Ocf9s9_-OAroJTfFwRKcIdYwYUCEoGXF08G8hPyrKJd7v=s176-c-k-c0x00ffffff-no-rj" className="img-fluid w-100" alt="Star Performer" />
                                             </div>
                                            <p>Kaustubh Agarwal</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://im.rediff.com/movies/2023/feb/15bassi1.jpg" className="img-fluid w-100" alt="Star Performer" />
                                             </div>
                                            <p>Anubhav Singh Bassi</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://tse4.mm.bing.net/th?id=OIP.61whmDezwnT1mZJWFnOiWwHaGA&pid=Api&P=0&h=220" className="img-fluid w-100" alt="Star Performer" />
                                               </div>
                                            <p>Rahul Subramanian</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://asianlite.com/wp-content/uploads/2019/08/Sumit-Anand-photo-credit-Nicole-Cleary-small-COVER.jpg" className="img-fluid w-100" alt="Star Performer" />
                                            </div>
                                            <p>Sumit Anand</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://images.tribuneindia.com/cms/gall_content/2017/11/2017_11$largeimg10_Friday_2017_010433847.jpg" className="img-fluid w-100" alt="Star Performer" />
                                            </div>
                                            <p>Zakir Khan</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://ik.imagekit.io/j83rchiauw/A_List_Star/gaurav-gupta-facts.jpg" className="img-fluid w-100" alt="Star Performer" />
                                            </div>
                                            <p>Gaurav Gupta</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://img.gurugamer.com/resize/740x-/2021/05/03/tanmay-bhat-1-9247.jpg" className="img-fluid w-100" alt="Star Performer" />
                                            </div>
                                            <p>Tanmay Bhat</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://freepubgoffers.com/wp-content/uploads/2020/10/Devesh-Dixit-Wiki-Age-Wife-Family-Biography-amp-More.jpg" className="img-fluid w-100" alt="Star Performer" />
                                            </div>
                                            <p>Devesh Dixit</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Star Performers end */}
                            {/* Upcoming Stars Start */}
                            <div className="upc-str-div pt-xl-5 pt-md-5 pt-3"  >
                            <div className="title" >
                                    <h3>Upcoming Stars</h3>
                                </div>
                                <div className="str-pfm-box" >
                                    <ul className=" d-flex flex-wrap list-unstyled" >
                                    <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://tse4.mm.bing.net/th?id=OIP.61whmDezwnT1mZJWFnOiWwHaGA&pid=Api&P=0&h=220" className="img-fluid w-100" alt="Star Performer" />
                                               </div>
                                            <p>Rahul Subramanian</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://asianlite.com/wp-content/uploads/2019/08/Sumit-Anand-photo-credit-Nicole-Cleary-small-COVER.jpg" className="img-fluid w-100" alt="Star Performer" />
                                            </div>
                                            <p>Sumit Anand</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://images.tribuneindia.com/cms/gall_content/2017/11/2017_11$largeimg10_Friday_2017_010433847.jpg" className="img-fluid w-100" alt="Star Performer" />
                                            </div>
                                            <p>Zakir Khan</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://ik.imagekit.io/j83rchiauw/A_List_Star/gaurav-gupta-facts.jpg" className="img-fluid w-100" alt="Star Performer" />
                                            </div>
                                            <p>Gaurav Gupta</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className="text-decoration-none" >
                                            <div className="str-pfm-div-img" >
                                            <img src="https://img.gurugamer.com/resize/740x-/2021/05/03/tanmay-bhat-1-9247.jpg" className="img-fluid w-100" alt="Star Performer" />
                                            </div>
                                            <p>Tanmay Bhat</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Upcoming Stars end */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
