import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Contact = () => {
    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <div className="container" style={{ color: "#fff" }}>
                <h1 className="text-center">contact us</h1>
                <br />
                <form id="contact-form" method="POST" action="" >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;