import React from "react";
import Link from "next/link";
import Search from "@components/search";
import "../../css/mainscreen.css";
import Image from "next/image";
import ProfileIMG from "../../css/profile.jpg";

const mainscreen = () => {
    return (
        <>
            <div>
                <div className="header " id="topheader">
                    <nav style={{ display: "flex", justifyContent: "space-between", padding: "0px 40px" }} className="navbar navbar-expand-lg fixed-top">
                        <div>
                            <Link href="/">
                                <h1 className="zestful">zestful amigos</h1>
                            </Link>
                        </div>
                        <Search />
                        <div className="">
                            <Link href="" className="login">login</Link>
                        </div>
                    </nav>
                </div>
            </div>
            <br />
            <br />
            <br />

            <div className="photo-and-actions">
                <div className="photo">
                    <Image className="photo-image" src={ProfileIMG} alt="Profile Image" />
                    <div className="photo-text">
                        <div className="photo-name-and-age">
                            <h2>Umer Javed</h2>
                            <h2>20</h2>
                        </div>
                        <div className="photo-bio">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos, doloribus officiis molestias quo magni earum quaerat nemo eius dolor!
                        </div>
                    </div>
                </div>


                <div className="actions">
                    <div className="action">
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="action">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="action">
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default mainscreen;