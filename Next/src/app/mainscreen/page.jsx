"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import * as Icon from 'react-bootstrap-icons';
import React from "react";
import Link from "next/link";
import Search from "@components/search";
import "../../css/mainscreen.css";
import Image from "next/image";
import ProfileIMG from "../../css/profile.jpg";


const options = [
    {
        name: '=',
        scroll: false,
        backdrop: false,
    }
];

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    return (
        <>
            <Button variant="secondary" onClick={toggleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas keyboard={false} style={{ background: "#333", width: "30%" }} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header style={{ justifyContent: "center" }} > {/* closeButton */}
                    <Offcanvas.Title style={{ color: "#fff", fontFamily: '"Open Sans", sans-serif', fontSize: "32px", fontWeight: "600" }}>
                        <div>
                            <Link href="/">
                                <h1 className="zestful">zestful amigos</h1>
                            </Link>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr style={{ color: "white", margin: "0" }} />
                <Offcanvas.Body>
                    <aside class="profile-card">
                        <header>
                            <a href="http://kanishkkunal.in">
                                <Image
                                    src={ProfileIMG}
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <h1>Kanishk Kunal</h1>
                            <h2>Web & Mobile Developer</h2>
                            <div class="profile-bio">
                                <p>Kanishk is a passionate developer & blogger who devotes most of his time punching his keyboard and
                                    swiping his smartphone.</p>
                            </div>
                        </header>

                    </aside>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

const mainscreen = () => {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>

                <div className='userRequest' style={{ width: "30%", }}>
                    {options.map((props, idx) => (
                        <OffCanvasExample key={idx} {...props} />
                    ))}
                </div>

                <div className="photo-and-actions" style={{ width: "70%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Search />
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
                            {/* <i className="fas fa-times"></i> */}
                            <Icon.ArrowLeftCircleFill className='shadowicon' />
                        </div>
                        <div className="action">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="action">
                            {/* <i className="fas fa-heart"></i> */}
                            <Icon.ArrowRightCircleFill className='shadowicon' />
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default mainscreen;