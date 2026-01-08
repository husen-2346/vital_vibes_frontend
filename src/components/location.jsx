import React from "react";

const Location = () => {
    return (
        <section className="location" id="location">
            <div className="container">

                <h2 className="section-title">Visit Our Clinic</h2>

                <div className="location-card">

                    {/* Map */}
                    <div className="map-box">
                        <a
                            href="https://www.google.com/maps/place/Vital+Vibes+Homoeo+Clinic/@12.9791906,77.536008,849m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae3d002dafbd51:0xf8b7263969c1d394!8m2!3d12.9791906!4d77.5385829!16s%2Fg%2F11lv51xlgv?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <iframe
                                title="Clinic Location"
                                src="https://www.google.com/maps?q=Vital+Vibes+Homoeo+Clinic@12.9791906,77.536008,849m&output=embed"
                                loading="lazy"
                            ></iframe>
                        </a>
                        <a
                            href="https://www.google.com/maps/place/Vital+Vibes+Homoeo+Clinic/@12.9791906,77.536008,849m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae3d002dafbd51:0xf8b7263969c1d394!8m2!3d12.9791906!4d77.5385829!16s%2Fg%2F11lv51xlgv?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                            className="map-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Directions
                        </a>

                    </div>


                    {/* Address Info */}
                    <div className="location-info">
                        <h3>Vital Vibes Homeo Clinic</h3>
                        <p>
                            20/6, 10th Cross Rd,<br />
                            Govindaraja Nagar Ward,<br />
                            Amarajyothi Nagar,<br />
                            Vijayanagar, Bengaluru,<br />
                            Karnataka 560040
                        </p>

                        <p className="timing">
                            <strong>Consultation Hours:</strong><br />
                            Mon – Sat: 9:00 AM – 8:00 PM<br />
                            Sunday: Closed
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Location;
