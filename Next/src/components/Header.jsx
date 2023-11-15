import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <div>
                <div className="header " id="topheader">
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
                </div>
            </div>

        </>
    ); 
};

export default Header;