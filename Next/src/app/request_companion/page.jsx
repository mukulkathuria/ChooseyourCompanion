import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

const requestCompanion = () => {
    return (
        <body>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <div className="xyz container" style={{ color: "#fff" }}>
                <h3 className="text-center">Request A COMPANION</h3>
            </div>
            <br />
            <div className="container">
                {/* {% if messages %}
                <div className="container mt-3">
                    {% for message in messages %}
                    <div className="alert alert-{{ message.tags }} alert-dismissible fade show" role="alert">
                        {{ message }}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {% endfor %}
                </div>
                {% endif %} */}
                <form style={{ color: "#b2b2b2" }} method="POST" encType="multipart/form-data">
                    {/* {% csrf_token %} */}
                    <h3>Personal information</h3>
                    <br />
                    <div className="form-group">
                        <label for="id_type_of_companion">Type of companion:</label>
                        <select name="type_of_companion" className="form-control" id="id_type_of_companion">
                            <option value="virtual">Virtual (Phone / Text)</option>
                            <option value="in_person">In Person</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="id_other_requirements">Other requirements:</label>
                        <textarea name="other_requirements" cols="40" rows="10" className="form-control" required="" id="id_other_requirements"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_preferred_meetup_date">Preferred Meetup Date:</label>
                        <input type="date" name="preferred_meetup_date" className="form-control" required="" id="id_preferred_meetup_date" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_preferred_meetup_time">Preferred Meetup Time:</label>
                        <input type="time" name="preferred_meetup_time" className="form-control" required="" id="id_preferred_meetup_time" />
                    </div>

                    <br />


                    <h3>Term & condition</h3>
                    <h5>1.By submitting this application, you certify that all information provided is accurate and complete to the best
                        of your knowledge.</h5>
                    <h5>2.You acknowledge that any deliberate misrepresentation or omission may lead to the rejection of your
                        application or termination of employment, if hired.</h5>
                    <h5>3.We may reach out to you for further details or to schedule an interview, based on the particulars furnished in
                        this form.</h5>
                    <br />
                    <h4>Upon completion of the form, kindly click the &quot;Submit&quot;
                        button to send your application for our careful
                        consideration.</h4>
                    <button type="submit" required tabIndex="9">Submit</button>
                </form>
                <br />
            </div>
            <Footer />
        </body>
    );
};

export default requestCompanion;