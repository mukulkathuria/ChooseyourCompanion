import React from "react";
import "../../css/carousel.css";
// import "../../js/carousel";
import Image from "next/image";

const browseCompanions = () => {
    return (
        <body>
            <div className="carousel">
                {/* {% for companion in companions %} */}
                <div className="card-container">
                    <div className="card">
                        <Image
                            src="https://assets.cntraveller.in/photos/60c07ef28fc45ba3917d99f0/16:9/w_1024%2Cc_limit/chennai-tamil-nadu-lockdown-1366x768.jpg"
                            alt="Tamilnadu"
                            style={{ height: "200px" }}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            {/* <h4 className="card-title">{{ companion.user.first_name }}</h4> */}
                            <h4 className="card-title">Hassan</h4>
                            <p className="card-text">25 year old Handsome.</p>
                            {/* <p className="card-text">{{ companion.user.profile.bio }}</p> */}
                            <a href="{% url 'main:companion_profile' companion.user.id %}" className="btn btn-primary">See More</a>
                        </div>
                    </div>
                </div>

                {/* {% endfor %} */}
            </div>
            <button className="nav left" onClick="prevSlide()"><i className="bi bi-chevron-left"></i></button>
            <button className="nav right" onClick="nextSlide()"><i className="bi bi-chevron-right"></i></button>
        </body>
    );
};

export default browseCompanions;