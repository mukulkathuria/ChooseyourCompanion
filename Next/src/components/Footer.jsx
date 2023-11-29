import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <br />
            <hr style={{ background: "#b2b2b2" }} />
            <footer>
                <div className="container">
                    <p className="float-end"><Link href="/">Back to Top</Link></p>
                    <p>© Zestful Amigos Company, Zestful.inc · </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;