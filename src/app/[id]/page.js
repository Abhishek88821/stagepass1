'use client';

import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
// import React, { useEffect, useState } from 'react';
import Experience from '../img/experience.png';
import Follower from '../img/followers.png';
import Show from '../img/show.png';
import Youtube from '../img/youtube.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaShareAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




function Page({ params }) {

    const { ID } = params;
    // const [comedians, setComedians] = useState([]);

    const comedians = {"artist_id":2,"artist_name":"Kaustubh Agarwal","description":"Integer arcu commodo purus mauris volutpat. Mi amet pharetra id malesuada pulvinar ac. Ipsum augue et diam est vitae dignissim. Augue mauris semper fusce at. Venenatis tempus sit volutpat sit vivahs. Integer arcu commodo purus mauris volutpat. Mi amet pharetra id malesuada pulvinar ac. Ipsum augue et diam est vitae dignissim. Augue mauris semper fusce at. Venenatis tempus sit volutpat sit vivahs.","artist_image":"https://stagepass-static-host.s3.ap-south-1.amazonaws.com/Event+Banner.jpeg","medias":{"videos":["https://www.youtube.com/watch?v=LKdUF7nO_zU"],"images":["https://stagepass-static-host.s3.ap-south-1.amazonaws.com/Event+Banner.jpeg"]},"years_of_experience":"4+","number_of_shows":"550+","youtube_views":"10M+","number_of_followers":"220K+","instagram_link":"https://www.instagram.com/hilarious_big/","youtube_link":"https://www.youtube.com/@ComicKaustubhAgarwal/featured","metadata_link":["https://www.primevideo.com/detail/0KJWUBZI40J231BM4RWYV402V9/ref=atv_dp_share_cu_r","https://www.primevideo.com/detail/0KJWUBZI40J231BM4RWYV402V9/ref=atv_dp_share_cu_r"],"previous_work":[{"label":"Stand-Up Videos","link":"https://www.youtube.com/@ComicKaustubhAgarwal/videos"},{"label":"Bidi News","link":"https://www.youtube.com/shorts/rMeQDFrdtkg"}]}

    // useEffect(() => {
        // fetch('https://dev-8hm08e04mtdz10e.api.raw-labs.com/stagepass-prive?artist_id=' + ID)
        //     .then(response => response.json())
        //     .then(data => setComedians(data))
        //     .catch(err => console.log(err))
    // }, [])

    
    // setTimeout( function() { document.getElementsByClassName('ytp-title-text')[0].style.display="none"} , 1000);
    

    return (
        <>
            {/* <!-- video slider start --> */}
            <section className="vid-div position-relative">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <Carousel id="carouselExampleControls" >
                                <Carousel.Item>
                                    <div class="youtube-container">
                                        <iframe id='the-iframe' src="https://www.youtube-nocookie.com/embed/LKdUF7nO_zU?autoplay=1&cc_load_policy=1&color=white&controls=0&disablekb=1&loop=1&modestbranding=1&&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div >
                    </div >
                </div >
            </section >
            {/* <!-- video slider end -->
    <!-- button start --> */}
            < section className="btn-div position-relative" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12 position-relative">
                            <div className="btn-lnk ">
                                <Link href="javascript:void(0)" role="button" className="text-decoration-none">
                                    BOOK NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* <!-- button end -->
    <!-- character details start --> */}
            < section className="chr-dtl-div position-relative pb-md-5 pb-3" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="pro-div">
                                <div className="pro-div-img">
                                    <img src={comedians.artist_image} className="img-fluid w-100" alt={comedians.artist_name} />
                                </div>
                                <div className="pro-div-cnt text-center">
                                    <h2>{comedians.artist_name}</h2>
                                    <span>Stand Up Comic</span>
                                    <ul className="list-unstyled mb-0 d-flex justify-content-center align-items-center">
                                        <li>
                                            <Link href="javascript:void(0)" className="text-decoration-none" role="button">
                                                <FaShareAlt />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={comedians.instagram_link} target="_blank" className="text-decoration-none" role="button">
                                                <FaInstagram />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={comedians.youtube_link} target="_blank" className="text-decoration-none" role="button" >
                                                <FaYoutube />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pro-div-par d-flex flex-wrap">
                                    <p>{comedians.description}<Link href="javascript:void(0)" role="button"
                                        className="text-decoration-none ps-2 text-white fw-bolder">Read more</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="cnt-box">
                                <div className="cnt-img">
                                    <Image src={Experience} className="img-fluid w-100" alt="Years Of Experience" />
                                </div>
                                <div className="cnt-cnt">
                                    <h3>{comedians.years_of_experience}</h3>
                                    <p>YEAR OF EXPERIENCE</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="cnt-box">
                                <div className="cnt-img">
                                    <Image src={Show} className="img-fluid w-100" alt="Number Of Shows" />
                                </div>
                                <div className="cnt-cnt">
                                    <h3>{comedians.number_of_shows}</h3>
                                    <p>NUMBER OF SHOWS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="cnt-box">
                                <div className="cnt-img">
                                    <Image src={Youtube} className="img-fluid w-100" alt="Youtube Views" />
                                </div>
                                <div className="cnt-cnt">
                                    <h3>{comedians.youtube_views}</h3>
                                    <p>YOUTUBE VIEWS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="cnt-box">
                                <div className="cnt-img">
                                    <Image src={Follower} className="img-fluid w-100" alt="Number Of Followers" />
                                </div>
                                <div className="cnt-cnt">
                                    <h3>{comedians.number_of_followers}</h3>
                                    <p>NUMBER OF FOLLOWERS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* <!-- character details end -->
    <!-- previous work start --> */}
            < section className="pre-wrk-div py-md-5 py-4" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="title pb-md-4 pb-3">
                                <h2>Previous Work</h2>
                            </div>
                            <div className="prv-wrk-lst">
                                <ul className="list-unstyled mb-0 d-flex flex-wrap justify-content-center">
                                    {comedians.previous_work.map((list, index) => (
                                        <li key={index} ><a href={list.link} className="text-decoration-none" ><span>{list.label}</span></a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* <!-- previous work end --> */}

        </>
    )
}

export default Page