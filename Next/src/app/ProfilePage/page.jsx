"use client"
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as Icon from 'react-bootstrap-icons';
import Link from 'next/link';

import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import '../../css/companion_dashboard.css';

const options = [
    {
        name: '=',
        scroll: false,
        backdrop: false,
    },
    // {
    //     name: 'Enable backdrop (default)',
    //     scroll: false,
    //     backdrop: true,
    // },
    // {
    //     name: 'Enable body scrolling',
    //     scroll: true,
    //     backdrop: false,
    // },
    // {
    //     name: 'Enable both scrolling & backdrop',
    //     scroll: true,
    //     backdrop: true,
    // }
];


// Sidebar
function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            {/* <Button variant="secondary" onClick={toggleShow} className="me-2">
                {name}
            </Button> */}
            <Offcanvas className="userRequestSidebar" keyboard={false} style={{ background: "#333", width: "50%" }} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header style={{ justifyContent: "space-between" }} > {/* closeButton  */}
                    <Link href="/">
                        <Icon.ArrowLeftCircle className='arrowLeftIcon' color='white' size={35} />
                    </Link>
                    <Offcanvas.Title style={{ color: "#fff", fontFamily: '"Open Sans", sans-serif', fontSize: "32px", fontWeight: "600" }}>User Requests</Offcanvas.Title>
                    <Link href="" >
                        <Icon.PersonCircle className='personCircleIcon' color='white' size={35} />
                    </Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <fieldset>
                        <div className="containerr">
                            <div className="sidebar_">
                                <div className="user-requests_">
                                    <div className="request_">
                                        <Image onClick={() => setLgShow(true)} src="/img-1.jpg" className="profile-pic_" alt="Profile Picture" width={50} height={50} />
                                        <div className='container2' style={{ display: "flex", width: "100%", alignItems: "center" }}>
                                            <div className="user-details_">
                                                <h3 onClick={() => setLgShow(true)} className="name_">Jane Doe</h3>
                                                <p className="age_">25</p>
                                            </div>
                                            <div className="actions_">
                                                {/* <Icon.CheckCircle className='checkIcon' size={40} /> */}
                                                {/* <Icon.XCircle className='XIcon' style={{ ma/rginLeft: "10px" }} color='#c0392b' size={40} /> */}
                                                <button className='accept_' onClick={() => handleModal(true)}>Accept</button>
                                                <button className='reject_' onClick={() => handleModal(false)}>Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </Offcanvas.Body>
            </Offcanvas>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ width: "100%", textAlign: "center" }} id="example-modal-sizes-title-lg">
                        Profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: "center" }}>
                    <div className="modal-content_">
                        <Image className='modal-profile-pic_' src="/img-1.jpg" alt="Profile Picture" width={150} height={150} />
                        <h3 className="modal-name_">Umer Javed</h3>
                        <p className="modal-info_">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque in cumque non tenetur? Odio corporis quos laborum sunt debitis impedit quam autem vel. Adipisci eum incidunt quas at iusto sequi.</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

function ProfilePage() {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div className='userRequest' style={{ width: "50%", }}>
                {options.map((props, idx) => (
                    <OffCanvasExample key={idx} {...props} />
                ))}
            </div>

            <div id='userProfileID' className='userProfile' style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "30px 0" }}>
                <div className="profile_ profile-card_">
                    <Image src="/img-1.jpg" alt="User Picture" width={100} height={100} />
                    <h3>John Smith</h3>
                    <p>Address information here</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;