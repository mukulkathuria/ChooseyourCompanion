import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "../../css/about.css"

const About = () => {
    return (
        <>
            <Header />
            <main className="about-us-main">
                {/* <div className="hello container">
                </div> */}
                <h1 className="zestful zestfulabout">zestful amigos</h1>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <div className="row">
                    <div className="aboutus" id="about">
                        <ul>
                        </ul>
                        <br />
                        <p>1.Welcome to Zestful Amigos, a pioneering platform dedicated to alleviating loneliness, fostering
                            meaningful connections, and bringing lively interactions to your life. In today&apos;s world of social media,
                            where everyone seems to have a multitude of friends, we understand that true companionship and genuine
                            connections can often feel elusive.</p>
                        <br />
                        <p>2.At Zestful Amigos, we believe that it&apos;s not just about having a large number of online friends; it&apos;s
                            about having real people around you who can make you feel truly alive. Our mission is to bridge the gap
                            between the digital and physical world, connecting you with individuals who are available to hang out
                            and bring vibrant energy to your life whenever you desire.</p>
                        <br />
                        <p>3.Our passionate team at Zestful Amigos is dedicated to helping you combat the sense of isolation and
                            experience the joy of genuine human connections. Whether you&apos;re craving a spontaneous outing, an
                            engaging conversation, or simply a friendly face to share experiences with, our platform provides a safe
                            and inclusive space to meet like-minded individuals who are ready to infuse your life with liveliness.
                        </p>
                        <p>4.Through our user-friendly platform, you can explore diverse profiles and connect with people who share
                            your interests, passions, and availability. No longer will you have to settle for scrolling through a
                            feed filled with superficial interactions. With Zestful Amigos, you can find real people who are eager
                            to meet, laugh, and make memories with you at any time you desire.</p>
                        <p>5.Your privacy and security are of utmost importance to us. We have implemented robust measures to
                            protect your personal information and ensure a safe environment for all our users. Rest assured that
                            your conversations and hangouts will remain confidential, and you have complete control over the
                            connections you make.</p>
                        <p>6.Join our ever-growing community of Zestful Amigos and let&apos;s find the perfect partner for everyone.
                            Together, we&apos;ll create a world where vibrant connections and meaningful companionship are accessible to
                            all.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default About;