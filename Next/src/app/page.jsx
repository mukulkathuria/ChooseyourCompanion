'use client'

import React, { useEffect } from "react";
import Link from "next/link";
import "../css/header.css";

function HomePage() {
    useEffect(() => {
        document.getElementById('openPopup').addEventListener('click', function () {
            document.getElementById('popup').style.display = 'block';
        });
        document.getElementById('closePopup').addEventListener('click', function () {
            document.getElementById('popup').style.display = 'none';
        });
        window.addEventListener('click', function (event) {
            if (event.target == document.getElementById('popup')) {
                document.getElementById('popup').style.display = 'none';
            }
        });

        document.getElementById('openPopup2').addEventListener('click', function () {
            document.getElementById('popup2').style.display = 'block';
            showSlide(1);
        });

        document.getElementById('closePopup2').addEventListener('click', function () {
            document.getElementById('popup2').style.display = 'none';
        });
        let currentSlide = 1;
        function showSlide(n) {
            let slides = document.getElementsByClassName('slide');
            if (n < 1) currentSlide = 1;
            if (n > slides.length) currentSlide = slides.length;
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slides[currentSlide - 1].style.display = 'block';
        }

        function navigateSlide(n) {
            showSlide(currentSlide += n);
        }

        document.getElementById('next1').addEventListener('click', function () {
            navigateSlide(1);
        });

        document.getElementById('prev2').addEventListener('click', function () {
            navigateSlide(-1);
        });

        document.getElementById('next2').addEventListener('click', function () {
            navigateSlide(1);
        });

        document.getElementById('prev3').addEventListener('click', function () {
            navigateSlide(-1);
        });

        document.getElementById('next3').addEventListener('click', function () {
            navigateSlide(1);
        });

        document.getElementById('prev4').addEventListener('click', function () {
            navigateSlide(-1);
        });
        document.getElementById('next4').addEventListener('click', function () {
            navigateSlide(1);
        });
        document.getElementById('prev5').addEventListener('click', function () {
            navigateSlide(-1);
        });
        document.getElementById('next5').addEventListener('click', function () {
            navigateSlide(1);
        });
        document.getElementById('prev6').addEventListener('click', function () {
            navigateSlide(-1);
        });
        document.getElementById('next6').addEventListener('click', function () {
            navigateSlide(1);
        });
        document.getElementById('prev7').addEventListener('click', function () {
            navigateSlide(-1);
        });
        document.getElementById('submit').addEventListener('click', function () {
            // Add your code to handle form submission here
            document.getElementById('popup2').style.display = 'none';
        });
    }, []);

    return (
        <>
            <div>
                <div className="header2" id="topheader">
                    <nav className="navbar navbar-expand-lg fixed-top">
                        <div className="container">
                            <Link href="/">
                                <h1 className="zestful">zestful amigos</h1>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ">
                                    <li className="nav-item active ml-4">
                                        <Link className="nav-link text-white" href="/about">About us</Link>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <Link className="nav-link text-white" href="privacy">privacy policy</Link>
                                    </li>
                                    {/* <li className="nav-item mx-4">
                                        <Link className="nav-link text-white" href="/contact_us">Contact</Link>
                                    </li> */}
                                    <li className="nav-item mx-4">
                                        <Link className="nav-link text-white" href="/services">services</Link>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <Link className="nav-link text-white" href="/faqs">FAQS</Link>
                                    </li>
                                    {/* <li className="nav-item mx-4">
                                        <Link className="nav-link text-white" href="/employment_form">Employment</Link>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <Link className="nav-link text-white" href="/request_companion">Request Companion</Link>
                                    </li> */}
                                </ul>
                            </div>

                        </div>
                        <div className="">
                            <Link href="" className="login">login</Link>
                        </div>
                    </nav>
                    <section className="header-section">
                        <div className="center-div">
                            <h1 className="para">step toward happieness</h1>
                            <br />
                            <a style={{ cursor: "pointer" }} id="openPopup">create account</a>
                        </div>
                    </section>
                </div>
            </div>

            {/* <!---------------- main page ends here create account -------------> */}
            <div id="popup" className="popup">
                <div className="popup-content2">
                    <span className="close" id="closePopup">&times;</span>
                    <div className="p-out">
                        <div className="p-in">
                            <h2 className="zestful text-white ml-5">zestful amigos</h2>
                            <h1 className="text-white" id="">create account</h1>
                            <hr />
                            <a style={{ color: "#fff", cursor: "pointer" }} className="cmp-btn ml-4" id="openPopup2">continue as companion</a>
                            <hr />
                            <hr />
                            <div>
                            <Link href  ="/companion_dashboard" style={{ color: "#fff", cursor: "pointer" }} className="cmp-btn2 ml-4">continue for companion</Link>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>


            {/* <!---------------- main page starts here login-------------> */}
            <div id="popup2" className="popup2">
                <span className="close" id="closePopup2">&times;</span>
                <div className="slide-container text-center">
                    <div className="slide" id="slide1">
                        <h2 className="zestful">zestful amigos</h2>
                        <h2 className="text-white">Gender Preference</h2>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female" />
                            <label className="form-check-label text-white" htmlFor="inlineRadio1">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male" />
                            <label className="form-check-label text-white" htmlFor="inlineRadio2">Male</label>
                        </div>
                        <br />
                        <button type="button" className="next" id="next1" >Next</button>
                    </div>

                    <div className="slide" id="slide2">
                        <h2 className="zestful">zestful amigos</h2>
                        <h3 className="text-white">Age</h3>
                        <input type="number" id="age" min="18" max="58" className="inp text-center" />
                        <br />
                        <button className="prev" id="prev2">Previous</button>
                        <button style={{ marginLeft: "5px" }} className="next" id="next2">Next</button>
                    </div>

                    <div className="slide" id="slide3">
                        <h2 className="zestful">zestful amigos</h2>
                        <h3 className="text-white">Area</h3>
                        <input type="text" id="area" style={{ width: "80%" }} className="inp text-center" />
                        <br />
                        <button className="prev" id="prev3">Previous</button>
                        <button style={{ marginLeft: "5px" }} className="next" id="next3">Next</button>
                    </div>

                    <div className="slide" id="slide4">
                        <h2 className="zestful">zestful amigos</h2>
                        <h3 className="text-white">Skin Tone</h3>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                value="option1" />
                            <label className="form-check-label text-white" htmlFor="inlineRadio1">Fair</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                value="option2" />
                            <label className="form-check-label text-white" htmlFor="inlineRadio2">Brown</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                value="option2" />
                            <label className="form-check-label text-white" htmlFor="inlineRadio2">Dark</label>
                        </div>
                        <br />
                        <button className="prev" id="prev4">Previous</button>
                        <button style={{ marginLeft: "5px" }} className="next" id="next4">Next</button>
                    </div>
                    <div className="slide" id="slide5">
                        <h2 className="zestful">zestful amigos</h2>
                        <h3 className="text-white">Body type</h3>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                value="option1" />
                            <label className="form-check-label text-white" htmlFor="inlineRadio1">Skinny Muscular</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                value="option2" />
                            <label className="form-check-label text-white" htmlFor="inlineRadio2">Athletic</label>
                        </div>
                        <br />
                        <button className="prev" id="prev5">Previous</button>
                        <button style={{ marginLeft: "5px" }} className="next" id="next5">Next</button>
                    </div>
                    <div className="slide" id="slide6">
                        <h2 className="zestful">zestful amigos</h2>
                        <h3 className="text-white">Photos</h3>
                        <input step={{ width: "50%" }} type="file" accept="image/*" />
                        <br />
                        <button className="prev" id="prev6">Previous</button>
                        <button style={{ marginLeft: "5px" }} className="next" id="next6">Next</button>
                    </div>
                    <div className="slide" id="slide7">
                        <h2 className="zestful">zestful amigos</h2>
                        <h3 className="text-white">Charges</h3>
                        <input type="number" className="inp text-center" />
                        <br />
                        <button className="prev" id="prev7">Previous</button>
                        <Link href  ="/mainscreen" style={{ marginLeft: "5px" }} className="next" id="submit">Submit</Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomePage;