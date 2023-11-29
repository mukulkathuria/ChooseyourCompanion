import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";
// Images
import service1 from '@assets/service1.jpg';
import service2 from '@assets/service2.jpg';
import servicex from '@assets/servicex.jpg';
import service4 from '@assets/service4.jpg';
import service5 from '@assets/service5.jpg';

const Services = () => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            {/* <div style={{ background: "#000", width: "100%", padding: "50px 200px 50px 200px" }}>
                <div className="text-center">
                    <h1 className="animate__backInDown" style={{ fontStyle: "italic", fontFamily: "'Roboto', sans-serif", fontWeight: "700", color: "#f0f2f4", lineHeight: "70px" }}>So, Why Choose A Dating App Like Zestful ?</h1>
                </div>
                <p style={{ color: "rgb(185, 191, 200) !important" }} className="lead">When it comes to dating apps, you&apos;ve got options: Badoo, Bumble, Hinge, Match, POF, OKCupid, and
                    many more. It doesn&apos;t matter if you want to find love, a date, or just have a casual chat, you still want to find
                    an app that&apos;s the right match for you. And it&apos;s not always black and white — when you want to meet new people,
                    your friends at Tinder can help you out with features designed to make the impossible possible. Dating online just
                    got easier.
                    <br /><br />
                    We won&apos;t brag about being the best free site — we&apos;ll let you decide for yourself by giving you Tinder at a glance.
                </p>
                <button style={{ marginTop: "50px", marginLeft: "auto", marginRight: "auto" }} className="JoinNowbtn">Join Now</button>
            </div> */}
            <div className="container" style={{ color: "#fff" }}>
                <br />
                <br />
                <div className="text-center">
                    <h1 className="animate__backInDown customHeading">WHAT WE OFFER</h1>
                </div>
                <p className="lead">Welcome to our wonderful Get Companion Service! We&apos;re here to make sure you have a fantastic
                    time at events,
                    parties, or during your leisure moments. No need to feel alone anymore! Our companions are ready to join you
                    and make your experiences enjoyable and memorable. Whether you want a date for a special occasion, someone
                    to hang out with at social events, or just a fun time exploring your city, our companions are here for you!
                </p>
                <br />
                <div className="container my-4">
                    <div className="row featurette d-flex justify-content-center align-item-center">
                        <div className="col-md-7">
                            <h2 className="customHeading featurette-heading">Why Choose Us?</h2>
                            <p className="lead">Great Companions: Our companions are friendly, well- educated, and charming. They
                                have awesome
                                personalities to make sure you have a fun and engaging time together.</p>
                            <p className="lead">Customized Experience: We know everyone is unique. When you book a companion, you
                                can tell us
                                your interests and expectations, so we can find the perfect match for you.
                            </p>
                            <p className="lead">Privacy and Discretion: Your privacy is super important to us. We promise to keep
                                all your
                                personal info safe and secure.</p>
                            <p className="lead">Strict Verification: We make sure our companions are genuine and compatible by
                                screening them
                                thoroughly. They go through background checks, interviews, and references.</p>
                            <p className="Allowed lead">No Romance Allowed: Our service is strictly for friendship and
                                companionship. There&apos;s no room for
                                romantic or intimate activities.</p>
                        </div>
                        <div className="col-md-5">
                            <Image src={service1} alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-fluid" />
                        </div>
                    </div>
                </div>
                <br />
                <div className="container my-4">
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="customHeading featurette-heading">How it work:</h2>
                            <p className="lead">Browse Companions: Check out our gallery of companions. You can see their photos,
                                interests, and when they&apos;re available.</p>
                            <p className="lead">Book Your Companion: Once you find the right match, book your companion by choosing
                                the date,
                                time, and how long you want to hang out.</p>
                            <p className="lead">Meet and Have Fun: On the day you&apos;ve picked, meet your companion at the agreed
                                location. Just
                                relax and enjoy the company of a great companion.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <Image src={service2} alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />

                        </div>
                    </div>
                </div>
                <br />
                <div className="container my-4">
                    <div className="row featurette d-flex justify-content-center align-item-center">
                        <div className="col-md-7">
                            <h2 className="customHeading featurette-heading">When to Get a Companion:</h2>
                            <p className="lead">Weddings and Family Events: No need to worry about being single at gatherings. Bring
                                a charming
                                companion to weddings, family events, or reunions.</p>
                            <p className="lead">Corporate Events: Impress your colleagues and clients by having a friendly companion
                                at business
                                functions or networking events.
                            </p>
                            <p className="lead">Dinner and Movie Dates: Don&apos;t want to eat or watch a movie alone? Have a delightful
                                evening with
                                a lovely companion who shares your interests.</p>
                            <p className="lead">City Explorations: Traveling to a new city? Let our companions show you around and
                                make your stay
                                more enjoyable.</p>
                            <p className="lead">Concerts and Shows: Feel the excitement of live
                                performances with a fantastic companion who loves music
                                and entertainment.</p>
                        </div>
                        <div className="col-md-5">
                            <Image src={servicex} alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-fluid" />


                        </div>
                    </div>
                </div>
                <br />
                <div className="container my-4">
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="customHeading featurette-heading">Our Promise to You:</h2>
                            <p className="lead">Your satisfaction and happiness are our top priorities at the Get Companion Service.
                                If you have any special requests or concerns, our customer support team is available 24/7 to
                                help you.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <Image src={service4} alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />

                        </div>
                    </div>
                </div>
                <br />
                <div className="container my-4">
                    <div className="row featurette d-flex justify-content-center align-item-center">
                        <div className="col-md-7">
                            <h2 className="customHeading featurette-heading">Disclaimer:</h2>
                            <p className="lead">Our Get Companion Service is strictly platonic, and we won&apos;t tolerate any
                                inappropriate behavior.
                                All participants must be 18 years or older. Our companions are paid for their time and
                                companionship only.</p>
                            <p className="lead">Don&apos;t miss out on the chance to enhance your social life and create unforgettable
                                memories! Get
                                your companion today and experience the joy of friendship like never before.
                            </p>
                        </div>
                        <div className="col-md-5">
                            <Image src={service5} alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-fluid" />

                        </div>
                    </div>
                </div>
            </div >
            <br />
            <br />
            <br />
            <h1 className="text-center customHeading" style={{ color: "#fff" }}>FAQs</h1>
            <h3 className="text-center customHeading featurette-heading" style={{ color: "#fff" }}>( FREQUENTLY ASK QUESTION )</h3>
            <div className="container FAQ my-4">
                <br />
                <div className="question"><i className="fa-solid fa-question"></i><i className="fa-solid fa-question"></i></div>
                <h5>1. What&apos;s the Secret to Finding the Perfect Companion? </h5>
                <p className="leadBlack">Welcome to our Companion Connection Website! Discover a world of delightful companionship where you can
                    find like-minded people to share memorable experiences. Are you ready to unlock the magic of meaningful
                    connections?</p>
            </div>
            <div className="container FAQ my-4">
                <br />
                <div className="question"><i className="fa-solid fa-question"></i><i className="fa-solid fa-question"></i></div>
                <h5>2. How Does Our Companion Connection Website Work its Charm?</h5>
                <p className="leadBlack"> Get ready for an adventure! Our platform works its enchantment by connecting you with fantastic
                    companions. Browse profiles, find common interests, and set the stage for unforgettable escapades!</p>
            </div>
            <div className="container FAQ my-4">
                <br />
                <div className="question"><i className="fa-solid fa-question"></i><i className="fa-solid fa-question"></i></div>
                <h5> 3. Are Our Companions the Real Deal or Mere Illusions?</h5>
                <p className="leadBlack">No smoke and mirrors here! Our companions are absolutely
                    real, genuine individuals who are excited to share their time and company with you. Prepare for
                    authentic
                    connections like no other! </p>
            </div>
            <div className="container FAQ my-4">
                <br />
                <div className="question"><i className="fa-solid fa-question"></i><i className="fa-solid fa-question"></i></div>
                <h5>4. Ready to Dance with Destiny? </h5>
                <p className="leadBlack"> Not Your Average Dating Site! Step into a world of companionship that goes
                    beyond typical dating sites. Our Companion Connection Website is all about meaningful interactions,
                    shared passions, and memorable moments. Leave the mundane behind!</p>
            </div>
            <div className="container FAQ my-4">
                <br />
                <div className="question"><i className="fa-solid fa-question"></i><i className="fa-solid fa-question"></i></div>
                <h5>5. Activities Galore! What&apos;s Your Idea of Fun?</h5>
                <p className="leadBlack">From thrilling adventures to cozy coffee chats, the possibilities are endless! Dive into a diverse range
                    of activities with our companions. Together, you&apos;ll create memories that sparkle like stars in the night
                    sky!</p>
            </div>
            <div className="container FAQ my-4">
                <br />
                <div className="question"><i className="fa-solid fa-question"></i><i className="fa-solid fa-question"></i></div>
                <h5>6. No Strings Attached! Is This Real?</h5>
                <p className="leadBlack">Absolutely real, and absolutely magical! Our platform is all about casual companionship without the
                    pressure of traditional
                    relationships. It&apos;s time to embrace the freedom of delightful encounters.</p>
            </div>
            <div className="container FAQ my-4">
                <br />
                <div className="question"><i className="fa-solid fa-question"></i><i className="fa-solid fa-question"></i></div>
                <h5>7. Unlocking Your Safety and Privacy Enchantment!</h5>
                <p className="leadBlack">Fear not, brave adventurer! We wield powerful security spells to safeguard your privacy and protect your
                    information. Connect with confidence and embark on your journey worry-free!</p>
            </div>
            <div className="container FAQ my-4">
                <br />
                <div className="question"><i className="fa-solid fa-question"></i><i className="fa-solid fa-question"></i></div>
                <h5>8. Companion Chronicles! Share Your Tale of Connection.
                </h5>
                <p className="leadBlack">You&apos;ve experienced the magic, and now it&apos;s time to share your story! Leave reviews and share feedback
                    about your enchanting escapades with our companions. Help others find their perfect match!</p>
            </div>
            <div className="container FAQ my-4">
                <br />
                <div className="question"><i className="fa-solid fa-question"></i><i className="fa-solid fa-question"></i></div>
                <h5>9. Enter the Companion&apos;s Chamber of Screening!</h5>
                <p className="leadBlack">Our companions are carefully selected to ensure authenticity and brilliance. We pride ourselves on
                    maintaining a community of genuine and captivating individuals. Your quest for the ideal companion
                    starts here!</p>
            </div>
            <div className="container FAQ my-4">
                <br />
                <div className="question"><i className="fa-solid fa-question"></i><i className="fa-solid fa-question"></i></div>
                <h5>10.Are You Ready to Begin Your Companionship Quest?
                </h5>
                <p className="leadBlack">The adventure awaits! Sign up, dive into profiles brimming with charm, and let the quest for
                    companionship begin! The next chapter of your journey promises enchanting encounters and unforgettable
                    memories!</p>
            </div>
            <Footer />
        </div>
    );
};

export default Services;