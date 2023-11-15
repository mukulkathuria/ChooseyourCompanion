import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

const employment_form = () => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <div className="xyz container" style={{ color: "#fff" }}>
                <h3 className="text-center">WANT TO BE A COMPANION</h3>
            </div>
            <br />
            <div className="container">
                {/* <div className="container mt-3">
                    <div className="alert alert-{{ message.tags }} alert-dismissible fade show" role="alert">
                        {{ message }}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div> */}
                <form style={{ color: "#b2b2b2" }} method="POST" encType="multipart/form-data">
                    {/* {% csrf_token %} */}
                    <h3>Personal information</h3>
                    <br />
                    <div className="row">
                        <div className="col">
                            <label htmlFor="id_age">Age:</label>
                            <input type="number" name="age" value="0" className="form-control" min="18" max="60" required id="id_age" />
                            {/* {{ form.age.label_tag }} */}
                            {/* {{ form.age }} */}
                        </div>
                        <div className="col">
                            <label htmlFor="id_height">Height:</label>
                            <input type="number" name="height" value="0" className="form-control" required id="id_height" />
                            {/* {{ form.height.label_tag }} */}
                            {/* {{ form.height }} */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="id_photo_face">Photo Face:</label>
                            <input type="file" accept="image/*" name="photo_face" className="form-control" required id="id_photo_face" />
                            {/* {{ form.photo_face.label_tag }} */}
                            {/* {{ form.photo_face }} */}
                        </div>
                        <div className="col-6">
                            <label htmlFor="id_photo_face">Photo Body:</label>
                            <input type="file" accept="image/*" name="photo_body" className="form-control" required id="id_photo_body" />
                            {/* {{ form.photo_body.label_tag }} */}
                            {/* {{ form.photo_body }} */}
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="id_language">Languages:</label>
                            <input type="text" name="language" className="form-control" required id="id_language" />
                            {/* {{ form.languages.label_tag }} */}
                            {/* {{ form.languages }} */}
                        </div>
                    </div>
                    <div className="form-group">
                        {/* {{ form.what_makes.label_tag }} */}
                        {/* {{ form.what_makes }} */}
                    </div>
                    <div className="form-group">
                        {/* {{ form.employment_history.label_tag }} */}
                        {/* {{ form.employment_history }} */}
                    </div>
                    <div className="form-group">
                        {/* {{ form.educational_background.label_tag }} */}
                        {/* {{ form.educational_background }} */}
                    </div>
                    <div className="form-group">
                        {/* {{ form.skills.label_tag }} */}
                        {/* {{ form.skills }} */}
                    </div>
                    <div className="form-group">
                        {/* {{ form.expected_salary.label_tag }} */}
                        {/* {{ form.expected_salary }} */}
                    </div>
                    <div className="form-group">
                        {/* {{ form.cover_letter.label_tag }} */}
                        {/* {{ form.cover_letter }} */}
                    </div>
                    <div className="form-group">
                        {/* {{ form.availability_date.label_tag }} */}
                        {/* {{ form.availability_date }} */}
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
        </div>
    );
};

export default employment_form;